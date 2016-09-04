import UI from 'editor-ui-lib';
import React from 'react'

export default class Main extends React.Component {
    onClick () {
        console.log('This is your call-to-action, take it seriously');
    }

    render () {
        return (
            <div className="main-tab">
                <img className="app-logo" src="logo.svg" alt="app logo"/>
                <p className="app-description">
                    This is the Wix App settings demo.
                    <br/>
                    Please add a short description of your App + CTA for the main action.
                </p>
                <UI.button className="btn-confirm-primary" label="Main CTA" onClick={()=>this.onClick()}/>
            </div>
        )
    }
}