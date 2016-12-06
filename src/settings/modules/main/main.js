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
                <UI.checkbox
                    wix-param="checkboxValue"
                    label="checkbox with labelAfterSymbol"
                    labelAfterSymbol={true}
                />

                <UI.checkbox
                    wix-param="checkboxValue"
                    label="checkbox with labelAfterSymbol"
                    labelAfterSymbol={true}
                />

            </div>
        )
    }
}