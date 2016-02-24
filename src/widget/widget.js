define(['React', 'Wix', './widget.rt'], function (React, Wix, template) {
    return React.createClass({
        displayName: 'template',
        getInitialState: function () {
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
        updateCompHeight: function (height) {
            var desiredHeight = height || document.documentElement.scrollHeight;
            Wix.setHeight(desiredHeight);
        },
        stringify: function (input) {
            try {
                return JSON.stringify(input, null, 4);
            } catch (err) {
                return input;
            }
        },
        render: template
    });
});
