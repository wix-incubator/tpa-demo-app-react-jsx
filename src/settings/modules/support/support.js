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

    render() {
        return (
            <div className="support-tab">
                <UI.divider long={true} />
                <UI.sectionDividerLabeled>Developer info</UI.sectionDividerLabeled>
                <UI.divider long={true} />

                <ul class="comments">
                    <li>we are looking for alternative for UI.symbol</li>
                </ul>
                <ul className="developer-info">
                    <li><UI.symbol name='email'/> support@wix.com</li>
                    <li><UI.symbol name='globe'/> Developer Website</li>
                    <li><UI.symbol name='phone'/> 1 408 974 4897</li>
                </ul>

                <UI.divider long={true} />
                <UI.sectionDividerLabeled>Review the app</UI.sectionDividerLabeled>
                <UI.divider long={true} />

                <p className="review-paragraph">Have you enjoyed the app? Spread the word and rate us in the app market</p>
                <div className="button-wrapper-center">
                    <UI.button className="btn-confirm-primary" onClick={()=>this.onRateUs()}>
                        Rate Us
                    </UI.button>
                </div>

                <UI.divider long={true} />
                <UI.sectionDividerLabeled>Send us a message</UI.sectionDividerLabeled>
                <UI.divider long={true} />

                <UI.textInput
                    title="What's your email? (optional)"
                    ref="email"
                    placeholder="Email"
                    onChange={
                        val=>this.setEmail(val)
                    }
                />

                <UI.divider/>

                <UI.textInput
                    title="What do you want to tell us?"
                    ref="message"
                    placeholder="Write us your message (new feature idea / other issues)"
                    isMultiLine={true}
                    onChange={
                        val=>this.setMessage(val
                    )}
                />

                <UI.divider/>

                <div className="button-wrapper-center">
                    <UI.button disabled={!this.state.canSend} onClick={()=>this.onSend()}>
                        Send
                    </UI.button>
                </div>
            </div>
        )
    }
}
