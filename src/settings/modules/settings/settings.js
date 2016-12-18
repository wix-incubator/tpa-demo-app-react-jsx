import UI from 'editor-ui-lib';
import React from 'react'

export default class Settings extends React.Component {
    render () {
        return (
            <div>
                <ul class="comments">
                    <li>title is missing</li>
                </ul>
                <UI.dropDownSelect
                    wix-param="whenImageIsClickedDD"
                    onChange={(newVal)=>this.props.onUpdate('settings_onImageClick', newVal)}
                    options={[
                        { value: '1', label: 'Enter expand mode'},
                        { value: '2', label: 'Show on full screen'},
                        { value: '3', label: 'Do nothing'}
                    ]}
                />

                <UI.divider long={true} />
                <UI.sectionDividerLabeled>Enable functionality</UI.sectionDividerLabeled>
                <UI.divider long={true} />

                <UI.toggleSwitch
                    wix-param="allowEditingSwitch"
                    label="Allow editing"
                    onChange={(newVal)=>this.props.onUpdate('settings_allowEditing', newVal)}
                />

                <UI.divider long={true} />

                <UI.toggleSwitch
                    wix-param="allowDeletingSwitch"
                    label="Allow editing"
                    onChange={(newVal)=>this.props.onUpdate('allowDeletingSwitch', newVal)}
                />

                <UI.divider long={true} />
                <UI.sectionDividerLabeled>Display info</UI.sectionDividerLabeled>
                <UI.divider long={true} />

                <UI.checkbox
                    wix-param="settingsCheckboxName"
                    label="Name"
                    labelAfterSymbol={true}
                    onChange={(newVal)=>this.props.onUpdate('settingsCheckboxName', newVal)}
                />

                <UI.checkbox
                    wix-param="settingsCheckboxTitle"
                    label="Title"
                    labelAfterSymbol={true}
                    onChange={(newVal)=>this.props.onUpdate('settingsCheckboxTitle', newVal)}
                />

                <UI.checkbox
                    wix-param="settingsCheckboxDescription"
                    label="Description"
                    labelAfterSymbol={true}
                    onChange={(newVal)=>this.props.onUpdate('settingsCheckboxDescription', newVal)}
                />

                <UI.divider long={true} />

                <UI.radioButtons
                    title="Do images show text?"
                    wix-param="settings_textOnImages"
                    options={[
                            { value: '1', label: 'A title and a description'},
                            { value: '2', label: 'Just a title'},
                            { value: '3', label: 'Just a description'}
                        ]}
                    onChange={(newVal)=>this.props.onUpdate('settings_textOnImages', newVal)}
                />

                <UI.divider long={true} />

                <ul class="comments">
                    <li>title is missing, use composite</li>
                </ul>
                <UI.textInput
                    defaultText="Title"
                    onChange={(newVal)=>this.props.onUpdate('settings_textFieldContent', newVal)}
                />

                <UI.divider long={true} />

                <ul class="comments">
                    <li>title is missing, use composite</li>
                </ul>
                <UI.textInputMultiline
                    title="Text area"
                    focus={true}
                    defaultText="Paragraph"
                    onChange={(newVal)=>this.props.onUpdate('settings_textAreaContent', newVal)}
                />
            </div>
        )
    }
}
