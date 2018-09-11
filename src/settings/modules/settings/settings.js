import UI from 'editor-ui-lib';
import React from 'react'

export default class Settings extends React.Component {
    render () {
        return (
            <div>
                <hr className="divider-long"/>
                    <UI.sectionDividerLabeled label="Set up your RSS feed"/>
                <hr className="divider-long"/>
                <UI.textInputWithButton
                    validator={function(value) {
                        var expression = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                        var regex = new RegExp(expression);
                        var t = 'www.google.com';
                        return value.match(regex);
                    }}
                    title="Paste you RSS feed URL here"
                    placeholder="http://www.domain.com/feed.xml"
                    infoText="If you are using a wix blog, your RSS feed would be {your domain}.com/feed.xml"
                    invalidMessage="Doesn't seem like a valid URL"
                    onButtonClick={(newVal)=>this.props.onUpdate('feed_url', newVal)}
                    defaultText={this.props.savedSettings.feed_url}
                    buttonText="Confirm"/>
                <div className="coming-soon">
                <div className="coming-soon-title">Coming soon</div>
                    <UI.slider
                       title="How many posts to show"
                       min={1}
                       max={20}
                       units="posts"
                       step={1}
                       defaultValue={5}
                       onChange="(newVal)=>this.props.onUpdate('layout_spacing', newVal)">
                </UI.slider>
                <UI.toggleSwitch
                    label="Post are clickable?"
                    defaultValue='{true}'
                    onChange={(newVal)=>console.log(newVal)}>
            </UI.toggleSwitch>
                                 
                                 
                                 
                </div>
            </div>
        )
    }
}
