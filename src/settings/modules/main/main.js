import UI from 'editor-ui-lib';
import React from 'react'

export default class Main extends React.Component {
    onClick () {
        console.log('This is your call-to-action, take it seriously');
    }

    constructor () {
        super();
        this.state = {
            booleanCheckbox: true,
            dropDownSelectedValue: '2',
            inoutValue: 'input value'
        }
    }

    onInputValueChange (newVal) {
        console.log('value changed: ' + newVal);
    }

    render () {
        return (
            <div className="main-tab">
                <UI.sectionDividerLabeled
                    label="Animation settings"
                    infoText="info text"
                    infoTitle="info title"
                />

                <UI.checkbox
                    value="{this.state.checkboxValue}"
                    label="Checkbox"
                    value={this.state.booleanCheckbox}
                    disabled={false}
                    labelAfterSymbol={false}
                    onChange={(newVal)=>this.setState({booleanCheckbox: newVal})}
                />

                <UI.checkbox
                    value={this.state.booleanCheckbox}
                    label="checkbox with labelAfterSymbol"
                    defaultValue={false}
                    disabled={true}
                    labelAfterSymbol={true}
                />

                <UI.radioButtons
                    title="Select position"
                    disabled={true}
                    infoTitle="blabla"
                    infoText="klakla"
                    options={[
                        { value: '1', label: 'first', disabled: true },
                        { value: '2', label: 'second' },
                        { value: '3', label: 'third' }
                    ]}
                    value={this.state.dropDownSelectedValue}
                    onChange={(newVal)=>this.setState({dropDownSelectedValue: newVal})}
                />

                <UI.button className="btn-confirm-primary" onClick={()=>this.onClick()}>
                    Main CTA
                </UI.button>


                <span>dropDownSelect is throwing an error</span>
                <UI.dropDownSelect
                    value={this.state.dropDownSelectedValue}
                    onChange={(newVal)=>this.setState({dropDownSelectedValue: newVal})}
                    options={[
                        {value: '1', label: 'main'},
                        {value: '2', label: 'sub level 1'},
                        {value: '3', label: 'sub 2 level 1'}
                    ]}
                />

                <UI.textInput
                    value={this.state.inputValue}
                    label="lay bell"
                    type="password"
                    placeholder="placeholder"
                    onChange={this.onInputValueChange}
                />

            </div>
        )
    }
}