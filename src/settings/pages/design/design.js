define(['React', 'UI'], function (React, UI) {
    return React.createClass({
        render: function () {
            return (
                <div>
                    <UI.sectionDividerLabeled label="Text & Background"/>

                    <UI.fontPicker title="Title style and color"
                                   wix-param="design_titleFont"
                                   onChange={(newVal)=>this.props.onUpdate('design_titleFont', newVal)}>
                    </UI.fontPicker>

                    <hr className="divider-long"/>

                    <UI.fontPicker title="Content style and color"
                                   wix-param="design_contentFont"
                                   onChange={(newVal)=>this.props.onUpdate('design_contentFont', newVal)}>
                    </UI.fontPicker>

                    <hr className="divider-long"/>

                    <UI.colorPickerSlider title="Background"
                                          wix-param="design_backgroundColor"
                                          startWithColor="color-3"
                                          startWithOpacity={0.5}
                                          onChange={(newVal)=>this.props.onUpdate('design_backgroundColor', newVal)}>
                    </UI.colorPickerSlider>

                    <UI.sectionDividerLabeled label="Buttons"/>

                    <UI.fontPicker title="Button text"
                                   wix-param="design_buttonFont"
                                   onChange={(newVal)=>this.props.onUpdate('design_buttonFont', newVal)}>
                    </UI.fontPicker>

                    <hr className="divider-long"/>

                    <UI.colorPickerSlider title="Button background"
                                          wix-param="design_buttonBackground"
                                          startWithColor="color-3"
                                          startWithOpacity={0.7}
                                          onChange={(newVal)=>this.props.onUpdate('design_buttonBackground', newVal)}>
                    </UI.colorPickerSlider>

                    <UI.sectionDividerLabeled label="Search fields"/>

                    <UI.colorPickerInput title="Field Text"
                                         wix-param="design_inputColor"
                                         startWithColor="color-3"
                                         onChange={(newVal)=>this.props.onUpdate('design_inputColor', newVal)}>
                    </UI.colorPickerInput>
                </div>

            )
        }
    });
});