import UI from 'editor-ui-lib';
import React from 'react'

export default class Design extends React.Component {
    render() {
        return (
            <div>
                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="Text & Background"/>
                <hr className="divider-long"/>

                <UI.fontAndColorPicker
                    title="Title font and color"
                    wix-param-font="_titleFont"
                    wix-param-color="_titleColor"
                    startWithColor="color-5"
                    startWithTheme="font_4"
                    infoTitle="some info title"
                    infoText="some information text should be here"
                    onChange={(newVal)=>this.props.onUpdate('Title font and color', newVal)}/>

                <hr className="divider-long"/>

                <UI.fontAndColorPicker
                    title="Description font and color"
                    wix-param-font="_descFont"
                    wix-param-color="_descColor"
                    startWithColor="color-4"
                    startWithTheme="font_8"
                    infoTitle="some info title"
                    infoText="some information text should be here"
                    onChange={(newVal)=>this.props.onUpdate('Description font and color', newVal)}/>

                <hr className="divider-long"/>

                <UI.colorPickerSlider
                    title="Background Color"
                    wix-param="_backgroundColor"
                    startWithColor="color-1"
                    startWithOpacity={1}
                    onChange={(newVal)=>this.props.onUpdate('_backgroundColor', newVal)}/>

                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="Search Field"/>
                <hr className="divider-long"/>

                <UI.fontAndColorPicker
                    title="Input field font and color"
                    wix-param-font="_inputFont"
                    wix-param-color="_inputColor"
                    startWithColor="color-3"
                    startWithTheme="font_8"
                    infoTitle="some info title"
                    infoText="some information text should be here"
                    onChange={(newVal)=>this.props.onUpdate('Input field font and color', newVal)}/>

                <hr className="divider-long"/>

                <UI.colorPickerSlider
                    title="Input field Background"
                    wix-param="_inputFieldBackground"
                    startWithColor="color-1"
                    startWithOpacity={1}
                    onChange={(newVal)=>this.props.onUpdate('_inputFieldBackground', newVal)}/>

                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="Button"/>
                <hr className="divider-long"/>

                <UI.fontAndColorPicker
                    title="Button font and color"
                    wix-param-font="_btnFont"
                    wix-param-color="_btnTextColor"
                    startWithColor="color-1"
                    startWithTheme="font_8"
                    infoTitle="some info title"
                    infoText="some information text should be here"
                    onChange={(newVal)=>this.props.onUpdate('Button font and color', newVal)}/>

                <hr className="divider-long"/>

                <UI.colorPickerInput
                    title="Button background"
                    wix-param="_btnBgColor"
                    startWithColor="color-8"
                    onChange={(newVal)=>this.props.onUpdate('_btnBgColor', newVal)}/>
            </div>
        )
    }
}
