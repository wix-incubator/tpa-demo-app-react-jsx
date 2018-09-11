import UI from 'editor-ui-lib';
import React from 'react'
import Wix from 'Wix';
import Main from './modules/main/main';
import Settings from './modules/settings/settings';
import Layout from './modules/layout/layout';
import Design from './modules/design/design';
import Animations from './modules/animations/animations';
import Support from './modules/support/support';


export default class settings extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            savedSettings: {
                feed_url: "",
                title_text: "Latest"
            },
            isLoading: true
        };
    }

    settingsUpdate (key, value) {
        const data = {key: key, value: value};
        Wix.Settings.triggerSettingsUpdatedEvent(data);
        console.log(data);
    }

    componentDidMount () {
        console.log('componentDidMount');
   
        var config = {
                apiKey: "AIzaSyCrEcfR6yAPz2mm_EK5_dg5auPTdsuK5Lo",
                authDomain: "wix-test-billy.firebaseapp.com",
                databaseURL: "https://wix-test-billy.firebaseio.com",
                projectId: "wix-test-billy",
                storageBucket: "wix-test-billy.appspot.com",
                messagingSenderId: "118952255688"
            };
        firebase.initializeApp(config);
        var db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true });

        var app_id = Wix.Utils.getInstanceId();

        db.collection('settings').doc(app_id).get()
        .then((snapshot) => {
            if (snapshot.data()) {
                this.setState({
                   savedSettings: { 
                        feed_url: snapshot.data().feed_url,
                        title_text: snapshot.data().title_text
                    },
                   isLoading: false
                });
            } else {
                /* No settings stored */   
            }
        });

    }

    render () {
        if (this.state.isLoading) {
            return <UI.preloader/>;
        } 
        return (
            <UI.appSettings>
                <UI.panelTabs defaultTabIndex={0}>
                    <Main tab="Main" className="btn-upgrade-banner" />
                    <Settings tab="Settings" onUpdate={this.settingsUpdate} savedSettings={this.state.savedSettings} />
                    <Design tab="Design" onUpdate={this.settingsUpdate} savedSettings={this.state.savedSettings} />
                    <Animations tab="Animations" onUpdate={this.settingsUpdate}/>
                    <hr className="divider-short"/>
                    <Support tab="Support"/>
                    <UI.button label="Upgrade" className="btn-upgrade-nav" onClick={() => Wix.Settings.openBillingPage()}/>
                </UI.panelTabs>
            </UI.appSettings>
        )
    }
}



