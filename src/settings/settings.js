import UI from 'editor-ui-lib';
import React from 'react'
import Wix from 'Wix';
import Main from './modules/main/main';

const defaultDBValue = {
    booleanValue: false,
    'numeric1-3Value': '2',
    fontPickerParam: {},
    colorPickerParam: {}
}

export default class settings extends React.Component {
    settingsUpdate (key, value) {
        const data = {key: key, value: value};
        Wix.Settings.triggerSettingsUpdatedEvent(data);
        console.log(data);
    }

    render () {
        return (
            <UI.appSettings DBClass={UI.styleParamDB} defaultDBValue={defaultDBValue}>
                <UI.panelTabs defaultTabIndex={0}>
                    <UI.panelTab label="Main">
                        <Main/>
                    </UI.panelTab>
                    <UI.panelTab label="MainDuplicate">
                        <Main/>
                    </UI.panelTab>
                </UI.panelTabs>
            </UI.appSettings>
        )
    }
}