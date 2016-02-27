define(['React', 'UI'], function (React, UI) {
    return React.createClass({
        render: function () {
            return (
                <div>
                    <UI.sectionDividerLabeled label="How does this gallery look?"/>

                    <UI.slider
                        title="Columns"
                        min={1}
                        max={36}
                        defaultValue={7}
                        onChange={(newVal)=>this.props.onUpdate('layout_columns', newVal)}>
                    </UI.slider>

                    <UI.slider
                        title="Spacing (px)"
                        min={0}
                        max={50}
                        defaultValue={10}
                        onChange={(newVal)=>this.props.onUpdate('layout_spacing', newVal)}>
                    </UI.slider>
                </div>
            )
        }
    });
});
