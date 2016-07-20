var UI = require('editor-ui-lib');
require('react');

var pages = {
    main: require('./pages/main/main'),
    settings: require('./pages/settings/settings'),
    layout: require('./pages/layout/layout'),
    design: require('./pages/design/design'),
    animations: require('./pages/animations/animations'),
    support: require('./pages/support/support')
};

var settingsApp =  React.createClass({
    settingsUpdate: function (key, value) {
        const data = {key: key, value: value};
        Wix.Settings.triggerSettingsUpdatedEvent(data);
    },
    render: function () {
        return (
            <UI.appSettings>
                <UI.appTabs defaultTabIndex={0}>
                    <pages.main tab="Main"/>
                    <pages.settings tab="Settings"/>
                    <pages.layout tab="Layout"/>
                    <pages.design tab="Design"/>
                    <pages.animations tab="Animations"/>
                    <pages.support tab="Support"/>
                    <hr className="divider-short"/>
                    <UI.button label="Upgrade" className="btn-upgrade-nav"/>
                </UI.appTabs>
            </UI.appSettings>
        );
    }
});

module.exports = settingsApp;
