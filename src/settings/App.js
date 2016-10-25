import React from 'react'
import { render } from  'react-dom';
import Wix from 'wix-sdk';
import settingsApp from './settings'
import $ from 'jquery';
import './settings.scss';

var rootInstance = null;
$(document).ready(function () {
  // Check correct loading of the Wix SDK
  if(typeof Wix !== "object") {
    console.error('Wix SDK was not loaded!');
  }

  rootInstance = render(
    React.createElement(settingsApp),
    $('#root').get(0)
  );

  if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
      getRootInstances: function () {
        // Help React Hot Loader figure out the root component instances on the page:
        return [rootInstance];
      }
    });
  }
});

