define(['react', 'editor-ui-lib'], function (React, UI) {
    return React.createClass({
        onPlayAnimation: function () {
            console.log('Play Animation was clicked');
        },
        render: function () {
            return (
                <div className="animations-tab">
                    <UI.dropDownSelect
                        defaultValue="slide"
                        title="Animation"
                        options={[
                            { value: 'slide', label: 'Slide'},
                            { value: 'fade', label: 'Fade'},
                            { value: 'other', label: 'Something else'}
                        ]}
                        onChange={(newVal)=>this.props.onUpdate('animations_type', newVal)}/>

                    <hr className="divider-long"/>

                    <UI.sectionDividerLabeled
                        label="Animation settings"
                        infoText="info text"
                        infoTitle="info title"/>

                    <hr className="divider-long"/>

                    <div className="button-wrapper-center">
                        <UI.button
                            icon="playAnimation"
                            label="Play Animation"
                            className="btn-confirm-secondary"
                            onClick={()=>this.onPlayAnimation()}/>
                    </div>

                    <hr className="divider-long"/>

                    <UI.dropDownSelect
                        defaultValue="right"
                        title="Direction"
                        options={[
                            { value: 'top', label: 'From Top'},
                            { value: 'right', label: 'From Right'},
                            { value: 'bottom', label: 'From Bottom'},
                            { value: 'left', label: 'From Left'}
                        ]}
                        onChange={(newVal)=>this.props.onUpdate('animations_direction', newVal)}/>

                    <hr className="divider-long"/>

                    <UI.slider
                        title="Delay (secs)"
                        min={0}
                        max={2}
                        step={0.1}
                        defaultValue={0.6}
                        onChange={(newVal)=>this.props.onUpdate('animations_delay', newVal)}/>

                    <hr className="divider-long"/>

                    <div>
                        <UI.toggleSwitch
                            label="Opposite effect"
                            defaultValue={true}
                            onChange={(newVal)=>this.props.onUpdate('animations_oppositeEffect', newVal)}/>
                    </div>
                </div>
            )
        }
    });
});
