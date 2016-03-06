var settings = require('./settings');
var $ = require('jquery');
require('./settings.scss');

$(document).ready(function () {
    React.render(
        React.createElement(settings),
        $('#root').get(0)
    );
});
