define(['React', '_', './animations.rt'], function (React, _, template) {
    return React.createClass({
        displayName: 'template',
        onPlayAnimation: function () {
            console.log('Play Animation was clicked');
        },
        render: template
    });
});
