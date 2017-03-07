import waterfall from 'async/waterfall';
import {addLocaleData} from 'react-intl';

export default function (resultCallback, appName) {
  const
    fbLocale = 'en',
    locale = (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage ||
      fbLocale;

  waterfall([
    function (callback) {
      if (!window.Intl) {
        require(`bundle?lazy&name=intl.pf!intl`)((file) => {
          callback(null, true);
        });
      } else {
        callback(null, false);
      }
    },
    function (oldBrowser, callback) {
      if (oldBrowser) {
        try {
          require(`bundle?lazy&name=[name].locale.pf!intl/locale-data/jsonp/${locale}`)((file) => {
            callback(null, oldBrowser);
          });
        } catch (err) {
          console.error(`Can not find polyfill for locale '${locale}'. Fallback to locale ${fbLocale}`);

          require(`bundle?lazy&name=[name].locale.pf!intl/locale-data/jsonp/${fbLocale}`)((file) => {
            callback(null, oldBrowser);
          });
        }
      } else {
        callback(null, oldBrowser);
      }
    },
    function (oldBrowser, callback) {
      if (oldBrowser) {
        callback(null, oldBrowser);
      } else {
        try {
          require(`bundle?lazy&name=[name].locale!react-intl/locale-data/${locale.substring(0, 2)}`)((file) => {
            addLocaleData(file);
            callback(null, oldBrowser);
          });
        } catch (err) {
          console.error(`Can not find any data for locale '${locale}'. Fallback to locale ${fbLocale}`);

          require(`bundle?lazy&name=[name].locale!react-intl/locale-data/${fbLocale}`)((file) => {
            addLocaleData(file);
            callback(null, oldBrowser);
          });
        }
      }
    }, function (oldBrowser, callback) {
      try {
        // no way to substitute string - it should be known outside of a runtime
        if (appName == 'settings') {
          require(`bundle?lazy&name=[name].settings!../src/settings/lang/${locale}.json`)((file) => {
            callback(null, {locale: locale, data: file});
          });
        } else if (appName == 'widget') {
          require(`bundle?lazy&name=[name].widget!../src/widget/lang/${locale}.json`)((file) => {
            callback(null, {locale: locale, data: file});
          });
        }

      } catch (err) {
        console.error(`Can not load translated messages for locale '${locale}'. Check existence in 'lang' directory. Fallback to default strings of locale: ${fbLocale}`);

        // no way to substitute string - it should be known outside of a runtime
        if (appName == 'settings') {
          require(`bundle?lazy&name=[name].settings!../src/settings/lang/${fbLocale}.json`)((file) => {
            callback(null, {locale: fbLocale, data: file});
          });
        } else if (appName == 'widget') {
          require(`bundle?lazy&name=[name].widget!../src/widget/lang/${fbLocale}.json`)((file) => {
            callback(null, {locale: fbLocale, data: file});
          });
        }

      }
    }
  ], function (err, result) {
    if (err) throw new Error('Locale initialization problem.');

    resultCallback(result.locale, result.data);
  });
}
