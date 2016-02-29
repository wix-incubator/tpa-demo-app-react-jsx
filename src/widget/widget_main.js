var widget = require('./widget');
require('./widget.scss');

$(document).ready(function () {
    React.render(
        React.createElement(widget),
        $('#root').get(0)
    );
});
