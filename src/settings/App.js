import React from 'react'
import ReactDOM from  'react-dom';
import {addLocaleData, IntlProvider} from 'react-intl';
import enLocale from 'react-intl/locale-data/en';
import Settings from './settings'
import './settings.scss';

// TODO: add Intl polyfill for old browsers with require.ensure after issue wds
// TODO: load current locale with require ensure

addLocaleData(enLocale);
// Detect user's language from a browser
const
  locale = (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage,
  allMessages = {};

// TODO: use require.ensure after solving issue with webpack-dev-server
// TODO: require.ensure only for current locale
const req = require.context('./lang', false, /\.json$/);
req.keys().forEach((item) => {
  const lng = item.split('./').pop().split('.')[0];
  allMessages[lng] = req(item);
});
const messages = allMessages[locale] || allMessages.en;

const rootInstance = ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <Settings/>
  </IntlProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
