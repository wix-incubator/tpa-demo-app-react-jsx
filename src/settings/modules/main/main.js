import UI from 'editor-ui-lib';
import React from 'react'

export default class Main extends React.Component {
    render () {
        return (
            <div className="main-tab">
                <UI.button>
                    button label
                </UI.button>

                <UI.sectionDividerLabeled>section Divider Labeled</UI.sectionDividerLabeled>

                <UI.divider long={true} />
                <br/>
                <UI.divider />

                <UI.textInput />
                <UI.textInputMultiline />

                <UI.toggleSwitch
                    wix-param="booleanValue"
                    label="label with labelAfterSymbol"
                />

                <UI.checkbox
                    wix-param="booleanValue"
                    label="checkbox with labelAfterSymbol"
                    labelAfterSymbol={true}
                />

                <UI.radioButtons
                    wix-param="numeric1-3Value"
                    title="Select position"
                    options={[
                        { value: '1', label: 'first', className: 'classFirst'},
                        { value: '2', label: 'second', className: 'classSecond'},
                        { value: '3', label: 'third', className: 'classThird'}
                    ]}
                />

                <UI.dropDownSelect
                    wix-param="numeric1-3Value"
                    onChange={e=>console.log(e)}
                    options={[
                        {value: '1', label: 'main'},
                        {value: '2', label: 'sub level 1'},
                        {value: '3', label: 'sub 2 level 1'}
                    ]}
                />

                <h1 style={{backgroundColor: 'rgb(220, 217, 217)', margin: 0, padding: '4px 10px', border: '1px solid #c2c2f5', fontSize: '24px', borderWidth: '1px 0'}}>old school components</h1>

                <UI.tooltip value="tooltip">
                    <span style={{background: 'yellow', padding: '5px', margin: '5px'}}>hover me! I have a lovely tooltip!</span>
                </UI.tooltip>

                <UI.toggleButtonsGroup
                    options={[
                        {value: '1', label: 'main'},
                        {value: '2', label: 'sub level 1'},
                        {value: '3', label: 'sub 2 level 1'}
                    ]}
                />

                <UI.fontPicker title="Font Picker" title="title" text="text" wix-param="fontPickerParam" />
                <UI.fontAndColorPicker title="Font Picker" title="title" text="text" wix-param="fontPickerParam" />
                <UI.colorPickerInput title="Color Picker" wix-param="colorPickerParam"/>
                <UI.colorPickerSlider title="Color Picker" wix-param="colorPickerParam"/>

                <UI.teaserPopup text="teaser popup text" title="teaser popup title"/>
            </div>
        )
    }
}