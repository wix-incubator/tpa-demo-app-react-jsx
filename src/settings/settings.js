import UI from 'editor-ui-lib';
import React from 'react'
import Wix from 'Wix';
import Main from './modules/main/main';
import Settings from './modules/settings/settings';
import Layout from './modules/layout/layout';
import Design from './modules/design/design';
import Animations from './modules/animations/animations';
import Support from './modules/support/support';

const defaultDBValue = {
    /* Settings tab */
    whenImageIsClickedDD: '1',
    allowEditingSwitch: true,
    allowDeletingSwitch: true,
    settingsCheckboxName: false,
    settingsCheckboxTitle: true,
    settingsCheckboxDescription: false,
    settings_textOnImages: '2',

    /* Animations tab */
    animationType: '1',
    animationDir: '2',
    animations_oppositeEffect: true
}

export default class settings extends React.Component {
    settingsUpdate (key, value) {
        const data = {key: key, value: value};
        Wix.Settings.triggerSettingsUpdatedEvent(data);
        console.log(data);
    }

    render () {
        return (
            <UI.appSettings defaultDBValue={defaultDBValue}>
                <UI.panelTabs defaultTabIndex={0}>
                    <UI.panelTab label="Main">
                        <Main onUpdate={this.settingsUpdate}/>
                    </UI.panelTab>
                    <UI.panelTab label="Settings">
                        <Settings onUpdate={this.settingsUpdate}/>
                    </UI.panelTab>
                    <UI.panelTab label="Layout">
                        <Layout onUpdate={this.settingsUpdate}/>
                    </UI.panelTab>
                    <UI.panelTab label="Design">
                        <Design onUpdate={this.settingsUpdate}/>
                    </UI.panelTab>
                    <UI.panelTab label="Animations">
                        <Animations onUpdate={this.settingsUpdate}/>
                    </UI.panelTab>
                    <UI.panelTab label="Support">
                        <Support onUpdate={this.settingsUpdate}/>
                    </UI.panelTab>

                    <UI.divider/>

                    <UI.button className="btn-upgrade-nav">Upgrade</UI.button>
                </UI.panelTabs>
            </UI.appSettings>
        )
    }
}
/*
*/
