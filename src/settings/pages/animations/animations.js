define(['react', 'UI'], function (React, UI) {
    return React.createClass({
        onPlayAnimation: function () {
            console.log('Play Animation was clicked');
        },
        render: function () {
            return (
                <div>
                    <UI.dropDownSelect
                        defaultValue="slide"
                        title="Animation"
                        options={[
                        { value: 'slide', label: 'Slide'},
                        { value: 'fade', label: 'Fade'},
                        { value: 'other', label: 'Something else'}
                        ]}
                        onChange={(newVal)=>this.props.onUpdate('animations_type', newVal)}>
                    </UI.dropDownSelect>

                    <UI.sectionDividerLabeled label="Animation settings"/>

                    <div className="button-wrapper-center">
                        <UI.button
                            label="Play Animation"
                            icon="calendar"
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
                        onChange={(newVal)=>this.props.onUpdate('animations_direction', newVal)}>
                    </UI.dropDownSelect>

                    <hr className="divider-long"/>

                    <UI.slider
                        title="Delay (secs)"
                        min={0}
                        max={2}
                        defaultValue={0.6}
                        step={0.1}
                        onChange={(newVal)=>this.props.onUpdate('animations_delay', newVal)}>
                    </UI.slider>

                    <hr className="divider-long"/>

                    <div>
                        <UI.toggle label="Opposite effect"
                                   defaultValue={true}
                                   onChange={(newVal)=>this.props.onUpdate('animations_oppositeEffect', newVal)}>
                        </UI.toggle>
                    </div>
                </div>
            )
        }
    });
});
