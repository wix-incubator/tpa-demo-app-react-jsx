define(['react', 'editor-ui-lib'], function (React, UI) {
    return React.createClass({
        render: function () {
            return (
                <div>
                    <UI.dropDownSelect
                        defaultValue="expand"
                        title="When image is clicked"
                        options={[
                            { value: 'expand', label: 'Enter expand mode'},
                            { value: 'fullscreen', label: 'Show on full screen'},
                            { value: 'nothing', label: 'Do nothing'}
                        ]}
                        onChange={(newVal)=>this.props.onUpdate('settings_onImageClick', newVal)}>
                    </UI.dropDownSelect>

                    <UI.sectionDividerLabeled label="Enable functionality"/>

                    <div>
                        <UI.toggle label="Allow editing"
                                   defaultValue={true}
                                   onChange={(newVal)=>this.props.onUpdate('settings_allowEditing', newVal)}>
                        </UI.toggle>
                    </div>
                    <hr className="divider-long"/>
                    <div>
                        <UI.toggle label="Allow deleting"
                                   defaultValue={true}
                                   onChange={(newVal)=>this.props.onUpdate('settings_allowDeleting', newVal)}>
                        </UI.toggle>
                    </div>

                    <UI.sectionDividerLabeled label="Display info"/>

                    <div>
                        <UI.checkbox label="Name"
                                     defaultValue={false}
                                     onChange={(newVal)=>this.props.onUpdate('settings_displayName', newVal)}>
                        </UI.checkbox>
                    </div>
                    <div>
                        <UI.checkbox label="Title"
                                     defaultValue={true}
                                     onChange={(newVal)=>this.props.onUpdate('settings_displayTitle', newVal)}>
                        </UI.checkbox>
                    </div>
                    <div>
                        <UI.checkbox label="Description"
                                     defaultValue={true}
                                     onChange={(newVal)=>this.props.onUpdate('settings_displayDescription', newVal)}>
                        </UI.checkbox>
                    </div>

                    <hr className="divider-long"/>

                    <UI.radioButtons
                        title="Do images show text?"
                        defaultValue="both"
                        options={[
                            { value: 'both', label: 'A title and a description'},
                            { value: 'title', label: 'Just a title'},
                            { value: 'description', label: 'Just a description'}
                        ]}
                        onClickPreview={(newVal)=>this.props.onUpdate('settings_textOnImages', newVal)}>
                    </UI.radioButtons>

                    <hr className="divider-long"/>

                    <UI.textInput
                        title="Text field"
                        defaultText="Title"
                        onChange={(newVal)=>this.props.onUpdate('settings_textFieldContent', newVal)}/>

                    <hr className="divider-long"/>

                    <UI.textInput
                        isMultiLine={true}
                        title="Text area"
                        defaultText="Paragraph"
                        onChange={(newVal)=>this.props.onUpdate('settings_textAreaContent', newVal)}/>
                </div>
            )
        }
    });
});