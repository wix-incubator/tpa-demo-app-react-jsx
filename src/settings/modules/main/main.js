import UI from 'editor-ui-lib';
import React from 'react'

export default class Main extends React.Component {
    onClick () {
        console.log('CTA clicked');
    }

    render () {
        return (
            <div className="main-tab">
                <img className="app-logo" src="https://seeklogo.com/images/R/rss-icon-logo-025B789EB6-seeklogo.com.png" alt="RSS LOGO"/>
                <p>
                    Display your latest news or posts in a beautiful news ticker.
                </p>
                <br/>
                <p>
                    Click to connect your feed.
                </p>
                <UI.button className="btn-confirm-primary" label="Connect feed"/>

                <div className="main-bottom">
                  <hr className="divider-long"/>
                  <p>
                    Upgrade now to get a lot more features and enjoy everything our app has to offer!
                  </p>
                  <UI.button label="Upgrade Now" className="btn-upgrade-banner" onClick={() => Wix.Settings.openBillingPage()}/>
                </div>
            </div>
        )
    }
}
