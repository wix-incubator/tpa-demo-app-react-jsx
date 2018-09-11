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
                    startWithTheme="font_8"
                    infoText="This will change the tickers title design"
                    onChange={(newVal)=>this.props.onUpdate('Title font and color', newVal)}/>

                <UI.textInput
                  ref="textInput"
                  title="Title"
                  placeholder="Latest"
                  infoText="This will be shown on the left side of your ticker"
                  invalidMessage="Better to keep it short and simple (max 12 characters)"
                  validateOnBlurOnly={true}
                  validator={(val) => val.length < 12 }
                  defaultText={this.props.savedSettings.title_text}
                  onChange={(newVal)=>this.props.onUpdate('title_text', newVal)}/>

                <hr className="divider-long"/>


                <UI.fontAndColorPicker
                    title="Headline font and color"
                    wix-param-font="_headlineFont"
                    wix-param-color="_headlineColor"
                    startWithColor="color-5"
                    startWithTheme="font_8"
                    infoText="some information text should be here"
                    onChange={(newVal)=>this.props.onUpdate('Description font and color', newVal)}/>

                
                <UI.colorPickerSlider
                    title="Headline Background"
                    wix-param="_backgroundColor"
                    startWithColor="color-1"
                    startWithOpacity={1}
                    onChange={(newVal)=>this.props.onUpdate('_backgroundColor', newVal)}/>

                <hr className="divider-long"/>

                <div className="coming-soon">
                <div className="coming-soon-title">Coming soon</div>                   
                    <UI.fontAndColorPicker
                        title="Publish time font and color"
                        wix-param-font="_headlineFont"
                        wix-param-color="_headlineColor"
                        startWithColor="color-5"
                        startWithTheme="font_8"
                        infoText="some information text should be here"
                        onChange={(newVal)=>this.props.onUpdate('Description font and color', newVal)}/>

                </div>
            </div>
        )
    }
}
