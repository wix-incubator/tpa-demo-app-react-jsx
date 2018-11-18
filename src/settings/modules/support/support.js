export default class Support extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            message: ''
        }
    }
    onRateUs () {
        console.log('Rating complete');
        Wix.Settings.openReviewInfo();
    }
    setEmail (email) {
        console.log(email);
        this.setState({
            email: email
        });
    }
    setMessage (message) {
        this.setState({
            message: message
        });
    }

    buttonDisabled() {
        return !(this.validateEmail(this.state.email) && this.state.message.length > 5);
    }

    onSend () {
        console.log('email:', this.state.email);
        console.log('message:', this.state.message);

        console.log('Message Sent');
    }
    validateEmail(email) {
      let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return reg.test(email);
    }

    updateButtonState() {
      let buttonDisabled = this.refs.message.isValueValid() && this.refs.email.isValueValid();
      this.setState({buttonDisabled : buttonDisabled});
    }

    render() {
        return (
            <div className="support-tab">
                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="Developer Info" />
                <hr className="divider-long"/>

                <ul className="developer-info">
                    <li><UI.symbol name='email'/> <a href="mailto:support@wix.com">support@wix.com </a> </li>
                    <li><UI.symbol name='globe'/> <a href="https://dev.wix.com/" target="_blank">Developer Website </a> </li>
                    <li><UI.symbol name='phone'/> <a href="tel:1-408-974-4897">1-408-974-4897</a> </li>
                </ul>

                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="App Review" />
                <hr className="divider-long"/>

                <p className="review-paragraph">{"Enjoying \<app name\>? Leave us a review in the App Market."}</p>
                <div className="button-wrapper-center">
                    <UI.button
                        className="btn-confirm-primary"
                        label="Review Us"
                        onClick={()=>this.onRateUs()}/>
                </div>

                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="Connect With Us" />
                <hr className="divider-long"/>

                <UI.textInput
                    title="What's your email? (optional)"
                    ref="email"
                    placeholder="Email"
                    validator={this.validateEmail}
                    invalidMessage="Invalid email address!"
                    validateOnBlurOnly={true}
                    onChange={
                        val => this.setEmail(val)
                    }/>

                <hr className="divider-short"/>

                <UI.textInput
                    title="Comments"
                    ref="message"
                    placeholder="We'd love to hear from you. Send us a message."
                    isMultiLine={true}
                    invalidMessage="Message must be atleast 5 characters long"
                    validator={message => message.length > 5}
                    validateOnBlurOnly={true}
                    onChange={
                        val => this.setMessage(val)
                    }/>

                <hr className="divider-short"/>

                <div className="button-wrapper-center">
                    <UI.button label="Send"
                               disabled={this.buttonDisabled()}
                               onClick={()=>this.onSend()}/>
                </div>
            </div>
        )
    }
}
