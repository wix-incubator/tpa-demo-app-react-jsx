var widget = require('./widget');
var $ = require('jquery');
require('./widget.scss');

$(document).ready(function () {
    React.render(
        React.createElement(widget),
        $('#root').get(0)
    );
});
