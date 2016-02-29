var settings = require('./settings');
require('./settings.scss');

$(document).ready(function () {
    React.render(
        React.createElement(settings),
        $('#root').get(0)
    );
});
