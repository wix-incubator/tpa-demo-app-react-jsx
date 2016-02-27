define(['React', 'UI'], function (React, UI) {
    return React.createClass({
        onClick: function () {
            console.log('This is your call-to-action, take it seriously');
        },
        render: function () {
            return (
                <div className="main-tab">
                    <div className="app-logo"></div>
                    <p className="app-description">
                        This is the Wix App settings demo.<br/>
                        Please add a short description of you App + CTA for the main action.
                    </p>
                    <UI.button className="main-cta-btn" label="Main CTA" onClick={()=>this.onClick()}/>
                </div>
            )
        }
    });
});
