var UI = require('editor-ui-lib');
require('react');
var pages = require('./pages/pages');

var settings =  React.createClass({
    settingsUpdate: function (key, value) {
        const data = {key: key, value: value};
        Wix.Settings.triggerSettingsUpdatedEvent(data);
    },
    render: function () {
        return (
            <div>
                <UI.appSettings>
                    <UI.appTabs defaultTabIndex={0} onChange={function(index){console.log('tab was changed to: ' + index);}}>
                        {pages.map((page) => {
                            return (
                                <page.content tab={page.label} onUpdate={(key, value)=>this.settingsUpdate(key, value)}/>
                            );
                        })}
                    </UI.appTabs>
                </UI.appSettings>
            </div>
        );
    }
});

module.exports = settings;