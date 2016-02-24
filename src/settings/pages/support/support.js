define(['React', '_', './support.rt'], function (React, _, template) {
    return React.createClass({
        displayName: 'template',
        getInitialState: function () {
            return {};
        },
        onRateUs: function () {
            console.log('Thanks for rating us, you rock!');
        },
        updateSupportFormState: function () {
            var email = this.refs.email.getValue();
            var message = this.refs.message.getValue();
            this.setState({canSend: email.length && message.length});
        },
        onSend: function () {
            var email = this.refs.email.getValue();
            var message = this.refs.message.getValue();

            console.log('email:', email);
            console.log('message:', message);

            console.log('Thanks for reaching out, we will look into it');
        },
        render: template
    });
});
