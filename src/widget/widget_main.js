var React = require('react');
var ReactDOM = require('react-dom');
var widget = require('./widget');
var $ = require('jquery');
require('./widget.scss');

$(document).ready(function () {
    ReactDOM.render(
        React.createElement(widget),
        $('#root').get(0)
    );
});
