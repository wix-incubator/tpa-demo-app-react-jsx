export default class Support extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            message: ''
        }
    }
    onRateUs () {
        console.log('Thanks for rating us, you rock!');
    }
    setEmail (email) {
        this.setState({
            email: email,
            canSend: Boolean(email.length && this.state.message.length)
        });
    }
    setMessage (message) {
        this.setState({
            message: message,
            canSend: Boolean(message.length && this.state.email.length)
        });
    }
    onSend () {
        console.log('email:', this.state.email);
        console.log('message:', this.state.message);

        console.log('Thanks for reaching out, we will look into it');
    }

    updateSupportFormState () {
        var email = this.state.email;
        var message = this.state.message;
        this.setState({
            canSend: email.length && message.length
        });
    }

    render() {
        return (
            <div className="support-tab">
                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="Developer info" />
                <hr className="divider-long"/>

                <ul className="developer-info">
                    <li><UI.symbol name='email'/> support@wix.com</li>
                    <li><UI.symbol name='globe'/> Developer Website</li>
                    <li><UI.symbol name='phone'/> 1 408 974 4897</li>
                </ul>

                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="Review the app" />
                <hr className="divider-long"/>

                <p className="review-paragraph">Have you enjoyed the app? Spread the word and rate us in the app market</p>
                <div className="button-wrapper-center">
                    <UI.button
                        className="btn-confirm-primary"
                        label="Rate Us"
                        onClick={()=>this.onRateUs()}/>
                </div>

                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="Send us a message" />
                <hr className="divider-long"/>

                <UI.textInput
                    title="What's your email? (optional)"
                    ref="email"
                    placeholder="Email"
                    onChange={
                        val=>this.setEmail(val)
                    }/>

                <hr className="divider-short"/>

                <UI.textInput
                    title="What do you want to tell us?"
                    ref="message"
                    placeholder="Write us your message (new feature idea / other issues)"
                    isMultiLine={true}
                    onChange={
                        val=>this.setMessage(val
                    )}/>

                <hr className="divider-short"/>

                <div className="button-wrapper-center">
                    <UI.button label="Send"
                               disabled={!this.state.canSend}
                               onClick={()=>this.onSend()}/>
                </div>
            </div>
        )
    }
}
