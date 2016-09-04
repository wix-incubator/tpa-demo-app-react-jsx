export default class Animation extends React.Component {
    onPlayAnimation () {
        console.log('Play Animation was clicked');
    }

    render() {
        return (
            <div className="animations-tab">
                <UI.dropDownSelect
                    defaultValue="slide"
                    title="Animation"
                    options={[
                            { value: '1', label: 'Slide'},
                            { value: '2', label: 'Fade'},
                            { value: '3', label: 'Something else'}
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
                            { value: '1', label: 'From Top'},
                            { value: '2', label: 'From Right'},
                            { value: '3', label: 'From Bottom'},
                            { value: '4', label: 'From Left'}
                        ]}
                    onChange={(newVal)=>this.props.onUpdate('animations_direction', newVal)}/>

                <hr className="divider-long"/>

                <UI.slider
                    title="Delay (sec)"
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
};
