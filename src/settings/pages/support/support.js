define(['React', 'UI'], function (React, UI) {
    return React.createClass({
        getInitialState: function () {
            return {
                email: '',
                message: ''
            };
        },
        onRateUs: function () {
            console.log('Thanks for rating us, you rock!');
        },
        setEmail: function (email) {
            this.setState({
                email: email,
                canSend: Boolean(email.length && this.state.message.length)
            });
        },
        setMessage: function (message) {
            this.setState({
                message: message,
                canSend: Boolean(message.length && this.state.email.length)
            });
        },
        onSend: function () {
            console.log('email:', this.state.email);
            console.log('message:', this.state.message);

            console.log('Thanks for reaching out, we will look into it');
        },
        render: function () {
            return (
                <div className="support-tab">
                    <UI.teaserPopup
                        title="Reach out"
                        text="Need help with the app? Think we can improve? Have an idea for a new feature?
                            We would love to hear what you have to say, just click on our email or submit a message below"
                        gotItText="Close"
                        linkText="Learn More">
                    </UI.teaserPopup>

                    <UI.sectionDividerLabeled label="Developer info"/>

                    <ul className="developer-info">
                        <li><UI.symbol name='infoSmall'/> App FAQ</li>
                        <li><UI.symbol name='infoSmall'/> support@wix.com</li>
                        <li><UI.symbol name='infoSmall'/> Developer Website</li>
                        <li><UI.symbol name='infoSmall'/> 1 408 974 4897</li>
                    </ul>

                    <UI.sectionDividerLabeled label="Review the app"/>

                    <p className="review-paragraph">Have you enjoyed the app? Spread the word and rate us in the app
                        market</p>

                    <div className="button-wrapper-center">
                        <UI.button
                            className="rate-us-btn"
                            label="Rate Us"
                            onClick={()=>this.onRateUs()}>
                        </UI.button>
                    </div>

                    <UI.sectionDividerLabeled label="Send us a message"/>

                    <UI.textInput
                        title="What's your email? (optional)"
                        placeholder="Email"
                        onChange={this.setEmail}/>

                    <hr className="divider-long"/>

                    <UI.textInput
                        title="What do you want to tell us?"
                        placeholder="Write us your message (new feature idea / other issues)"
                        isMultiLine={true}
                        onChange={this.setMessage}/>

                    <hr className="divider-long"/>

                    <div className="button-wrapper-center">
                        <UI.button label="Send"
                                   disabled={!this.state.canSend}
                                   onClick={()=>this.onSend()}/>
                    </div>
                </div>
            )
        }
    });
});
