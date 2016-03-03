define(['react', 'Wix'], function (React, Wix) {
    return React.createClass({
        getInitialState: () => {
            return {
                settingsUpdate: {}
            }
        },
        componentDidMount: function () {
            this.updateCompHeight(600);
            Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, this.onSettingsUpdate);

            // You can get the style params programmatically, un-comment the following snippet to see how it works:
            /*Wix.Styles.getStyleParams(function (style) {
                console.log(style);
             });*/

            // You can also get the style every time it changes, try this:
            /*Wix.addEventListener(Wix.Events.STYLE_PARAMS_CHANGE, function (style) {
                console.log(style);
             });*/
        },
        onSettingsUpdate: function (update) {
            this.setState({
                settingsUpdate: update
            }, this.updateCompHeight);
        },
        updateCompHeight: (height) => {
            const desiredHeight = height || document.documentElement.scrollHeight;
            Wix.setHeight(desiredHeight);
        },
        stringify: (input) => {
            try {
                return JSON.stringify(input, null, 4);
            } catch (err) {
                return input;
            }
        },
        render: function () {
            const {settingsUpdate} = this.state;
            return (
                <div>
                    <section>
                        <h2>Design demo</h2>
                        <div className="wix-style-sample">
                            <h3 className="sample-element sample-title">Hello!</h3>
                            <p className="sample-element sample-content">Welcome to Demo App, let's play.</p>
                            <button className="sample-element sample-button">Click me!</button>
                            <form className="form">
                                <input title="email" type="email" className="sample-element sample-input"
                                       value="I'm an email text field!"/>
                            </form>
                        </div>
                    </section>

                    <section className="settings-update">
                        <h2>Last settings update</h2>
                    <pre>
                        <code className="json">{this.stringify(settingsUpdate)}</code>
                    </pre>
                    </section>
                </div>
            )
        }
    });
});
