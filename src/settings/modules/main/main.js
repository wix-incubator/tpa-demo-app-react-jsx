import UI from 'editor-ui-lib';
import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class Main extends React.Component {
    onClick () {
        console.log('This is your call-to-action, take it seriously');
    }

    render () {
        return (
            <div className="main-tab">
                <img className="app-logo" src={require('./logo.svg')} alt="app logo"/>
                <p className="app-description">
                  <FormattedMessage
                    id="settings.main.intro"
                    description="Explanation about setting app"
                    defaultMessage="This is the Wix App settings demo."
                  />
                  <br/>
                  <FormattedMessage
                    id="settings.main.introDesc"
                    description="Explanation about setting app - desc"
                    defaultMessage="Please add a short description of your App + CTA for the main action."
                  />
                </p>
                <UI.button className="btn-confirm-primary" label="Main CTA" onClick={()=>this.onClick()}/>
            </div>
        )
    }
}
