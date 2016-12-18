export default class Animation extends React.Component {
    onPlayAnimation () {
        console.log('Play Animation was clicked');
    }

    render() {
        return (
            <div className="animations-tab">

                <ul class="comments">
                    <li>'Animation' title is missing, use composite</li>
                </ul>
                <UI.dropDownSelect
                    defaultValue="slide"
                    wix-param="animationType"
                    options={[
                            { value: '1', label: 'Slide'},
                            { value: '2', label: 'Fade'},
                            { value: '3', label: 'Something else'}
                        ]}
                    onChange={(newVal)=>this.props.onUpdate('animationType', newVal)}
                />

                <ul class="comments">
                    <li>
                        infoText="info text"
                        infoTitle="info title"
                        are missing, no infoIcon, use composites when ready
                    </li>
                </ul>

                <UI.divider long={true} />
                <UI.sectionDividerLabeled>Animation settings</UI.sectionDividerLabeled>
                <UI.divider long={true} />

                <div className="button-wrapper-center">
                    <UI.button
                        className="btn-confirm-secondary"
                        onClick={()=>this.onPlayAnimation()}>
                        <UI.symbol name="playAnimation"/>
                        Play Animation
                    </UI.button>
                </div>

                <UI.divider long={true} />

                <ul class="comments">
                    <li>'Direction' title is missing, use composite</li>
                </ul>
                <UI.dropDownSelect
                    options={[
                            { value: '1', label: 'From Top'},
                            { value: '2', label: 'From Right'},
                            { value: '3', label: 'From Bottom'},
                            { value: '4', label: 'From Left'}
                        ]}
                    onChange={(newVal)=>this.props.onUpdate('animations_direction', newVal)}
                />

                <UI.divider long={true} />

                <UI.slider
                    title="Delay (sec)"
                    min={0}
                    max={2}
                    step={0.1}
                    defaultValue={0.6}
                    onChange={(newVal)=>this.props.onUpdate('animations_delay', newVal)}/>

                <UI.divider long={true} />

                <div>
                    <UI.toggleSwitch
                        label="Opposite effect"
                        wix-param="animations_oppositeEffect"
                        onChange={(newVal)=>this.props.onUpdate('animations_oppositeEffect', newVal)}/>
                </div>
            </div>
        )
    }
};
