define(['react', 'UI', './pages/pages'], function (React, UI, pages) {
    return React.createClass({
        settingsUpdate: function (key, value) {
            const data = {key: key, value: value};
            Wix.Settings.triggerSettingsUpdatedEvent(data);
        },
        render: function () {
            const verticalTabsStyle = {height: '1000px'};
            return (
                <UI.verticalTabs defaultTab="tab0" style={verticalTabsStyle}>
                    <UI.tabs.header>
                        {pages.map((page, pageIndex) => {
                            return (
                                <UI.tabs.label for={'tab' + pageIndex} key={pageIndex} className="layout">
                                    {page.label}
                                </UI.tabs.label>
                            );
                        })}
                    </UI.tabs.header>
                    <UI.tabs.content>
                        {pages.map((page, pageIndex) => {
                            return (
                                <UI.tabs.tab key={pageIndex} name={'tab' + pageIndex} className="my-custom-tab">
                                    <page.content onUpdate={(key, value)=>this.settingsUpdate(key, value)}/>
                                </UI.tabs.tab>
                            );
                        })}
                    </UI.tabs.content>
                </UI.verticalTabs>
            )
        }
    });
});
