import UI from 'editor-ui-lib';
import React from 'react'
import Wix from 'Wix';
import Main from './modules/main/main';
import Settings from './modules/settings/settings';
import Layout from './modules/layout/layout';
import Design from './modules/design/design';
import Animations from './modules/animations/animations';
import Support from './modules/support/support';

export default class settings extends React.Component {
    settingsUpdate (key, value) {
        const data = {key: key, value: value};
        Wix.Settings.triggerSettingsUpdatedEvent(data);
        console.log(data);
    }

    render () {
        return (
            <UI.appSettings>
                <UI.panelTabs defaultTabIndex={0}>
                    <Main tab="Main"/>
                    <Settings tab="Settings" onUpdate={this.settingsUpdate}/>
                    <Layout tab="Layout" onUpdate={this.settingsUpdate}/>
                    <Design tab="Design" onUpdate={this.settingsUpdate}/>
                    <Animations tab="Animations" onUpdate={this.settingsUpdate}/>
                    <hr className="divider-short"/>
                    <Support tab="Support"/>
                    <UI.button label="Upgrade" className="btn-upgrade-nav" onClick={() => Wix.Settings.openBillingPage()}/>
                </UI.panelTabs>
            </UI.appSettings>
        )
    }
}
