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

                <div class="wix-style-sample">
                     <h3 class="sample-element sample-title">Demo App</h3>
                <p class="sample-element sample-content">Welcome to the Wix Demo App, let's play!</p>
                <form class="form">
                        <input title="email" type="email" class="sample-element sample-input" value="Enter text here"/>
                </form>
                <button class="sample-element sample-button">Click me!</button>
                <br/>
                      <h3 class="sample-element sample-title" >Last settings update</h3>
                <pre>
                     <code class="json sample-content">{{settingsUpdate}}</code>
                </pre>
            </div>
                </div>
            )
        }
    });
});
