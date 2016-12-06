import UI from 'editor-ui-lib';
import React from 'react'
import Wix from 'Wix';
import Main from './modules/main/main';

const DBInitialState = {
    checkboxValue: false,
    falseyValue: false
}

export default class settings extends React.Component {
    settingsUpdate (key, value) {
        const data = {key: key, value: value};
        Wix.Settings.triggerSettingsUpdatedEvent(data);
        console.log(data);
    }

    render () {
        return (
            <UI.appSettings DBClass={UI.styleParamDB} DBInitialState={DBInitialState}>
                <UI.panelTabs defaultTabIndex={0}>
                    <Main tab="Main"/>
                </UI.panelTabs>
            </UI.appSettings>
        )
    }
}