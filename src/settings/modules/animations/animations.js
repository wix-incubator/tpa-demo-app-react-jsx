export default class Animation extends React.Component {
    onPlayAnimation () {
        console.log('Play Animation was clicked');
    }

    render() {
        return (
            <div className="animations-tab">
                <UI.Composites.DropDownLabeled>
                    <UI.textLabel value="Animation" shouldTranslate={false}/>
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
                </UI.Composites.DropDownLabeled>


                <ul className="comments hide">
                    <li>
                        infoText="info text"
                        infoTitle="info title"
                        are missing, no infoIcon, use composites when ready
                    </li>
                </ul>

                <UI.divider long={true} />
                <UI.sectionDividerLabeled>Animation settings</UI.sectionDividerLabeled>
                <UI.divider long={true} />

                <UI.Composites.ButtonLargeUnlabeled>
                    <UI.button
                        className="btn-confirm-secondary"
                        onClick={()=>this.onPlayAnimation()}>
                        <UI.symbol name="playAnimation"/>
                        Play Animation
                    </UI.button>
                </UI.Composites.ButtonLargeUnlabeled>

                <UI.divider long={true} />

                <UI.Composites.DropDownLabeled>
                    <UI.textLabel value="Direction" shouldTranslate={false}/>
                    <UI.dropDownSelect
                        wix-param="animationDir"
                        options={[
                            { value: '1', label: 'From Top'},
                            { value: '2', label: 'From Right'},
                            { value: '3', label: 'From Bottom'},
                            { value: '4', label: 'From Left'}
                        ]}
                        onChange={(newVal)=>this.props.onUpdate('animations_direction', newVal)}
                    />
                </UI.Composites.DropDownLabeled>

                <UI.divider long={true} />

                <UI.slider
                    title="Delay (sec)"
                    min={0}
                    max={2}
                    step={0.1}
                    defaultValue={0.6}
                    onChange={(newVal)=>this.props.onUpdate('animations_delay', newVal)}/>

                <UI.divider long={true} />

                <UI.Composites.ToggleSwitchUnlabeled>
                    <UI.toggleSwitch
                        label="Opposite effect"
                        wix-param="animations_oppositeEffect"
                        onChange={(newVal)=>this.props.onUpdate('animations_oppositeEffect', newVal)}/>
                </UI.Composites.ToggleSwitchUnlabeled>
            </div>
        )
    }
};
