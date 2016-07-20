define(['react', 'editor-ui-lib'], function (React, UI) {
    return React.createClass({
        render: function () {
            return (
                <div>
                    <hr className="divider-long"/>
                    <UI.sectionDividerLabeled label="Text & Background"/>
                    <hr className="divider-long"/>

                    <UI.fontAndColorPicker
                        title="Font style and color"
                        wix-param-font="_titleFont"
                        wix-param-color="_titleColor"
                        startWithColor="color-1"
                        startWithTheme="font_3"
                        infoTitle="some info title"
                        infoText="some information text should be here"/>

                    <hr className="divider-long"/>

                    <UI.colorPickerSlider
                        title="Background"
                        wix-param="design_backgroundColor"
                        startWithColor="color-11"
                        startWithOpacity={1}
                        onChange={(newVal)=>this.props.onUpdate('design_backgroundColor', newVal)}/>

                    <hr className="divider-long"/>
                    <UI.sectionDividerLabeled label="Buttons"/>
                    <hr className="divider-long"/>

                    <UI.fontAndColorPicker
                        title="Button Text"
                        wix-param-font="btnFont"
                        wix-param-color="btnColor"
                        infoTitle="some info title"
                        infoText="some information text should be here"/>

                    <hr className="divider-long"/>

                    <UI.colorPickerSlider
                        title="Button Background"
                        wix-param="btnBG"
                        startWithColor="color-3"
                        startWithOpacity={0.7}
                        onChange={(newVal)=>this.props.onUpdate('design_buttonBackground', newVal)}/>

                    <hr className="divider-long"/>
                    <UI.sectionDividerLabeled label="Search fields"/>
                    <hr className="divider-long"/>

                    <UI.colorPickerInput
                        title="Field Text"
                        wix-param="inputColor"
                        startWithColor="color-3"
                        onChange={(newVal)=>this.props.onUpdate('design_inputColor', newVal)}/>
                </div>
            )
        }
    });
});