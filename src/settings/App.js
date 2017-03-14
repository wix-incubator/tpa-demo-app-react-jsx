import React from 'react'
import ReactDOM from  'react-dom';
import bundleLoaderI18n from '../../scripts/bundle-loader-i18n';
import {IntlProvider} from 'react-intl';
import App from './settings'
import './settings.scss';

let rootInstance;

bundleLoaderI18n(renderRootComponent, 'settings');

function renderRootComponent(locale, messages) {
  rootInstance = ReactDOM.render(
    <IntlProvider locale={locale} messages={messages}>
      <App/>
    </IntlProvider>,
    document.getElementById('root')
  );
}

if (module.hot) {
  module.hot.accept();
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
