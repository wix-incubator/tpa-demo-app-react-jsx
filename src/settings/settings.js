define(['React', '_', './settings.rt'], function (React, _, template) {
    return React.createClass({
        displayName: 'template',
        settingsUpdate: function (key, value) {
            var data = {key: key, value: value};
            Wix.Settings.triggerSettingsUpdatedEvent(data);
        },
        render: template
    });
});
