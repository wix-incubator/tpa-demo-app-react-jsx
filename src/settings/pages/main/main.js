define(['React', '_', './main.rt'], function (React, _, template) {
    return React.createClass({
        displayName: 'template',
        onClick: function () {
            console.log('This is your call-to-action, take it seriously');
        },
        render: template
    });
});
