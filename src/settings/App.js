import React from 'react'
import { render } from  'react-dom';
import Wix from 'Wix';
import settingsApp from './settings'
import $ from 'jquery';
import './settings.scss';

var rootInstance = null;
$(document).ready(function () {
  rootInstance = render(React.createElement(settingsApp), $('#root').get(0));
  Wix.addEventListener(Wix.Events.DEVICE_TYPE_CHANGED, function (event) {
    console.log('changed device... settings', event);
  });

  if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
      getRootInstances: function () {
        // Help React Hot Loader figure out the root component instances on the page:
        return [rootInstance];
      },
    });
  }
});
