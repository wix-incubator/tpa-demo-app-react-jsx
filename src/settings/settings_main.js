var React = require('react');
var ReactDOM = require('react-dom');
var settings = require('./settings');
var $ = require('jquery');
require('./settings.scss');

$(document).ready(function () {
    ReactDOM.render(
        React.createElement(settings),
        $('#root').get(0)
    );
});

