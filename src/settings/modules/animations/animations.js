export default class Animation extends React.Component {
    onPlayAnimation () {
        console.log('Play Animation was clicked');
    }

    render() {
        return (
            <div className="animations-tab">
                <UI.sectionDividerLabeled
                    label="Animation settings"
                    infoText="info text"/>
                <hr className="divider-long"/>

                <div className="coming-soon">
                <div className="coming-soon-title">Coming soon</div>                   

                    <UI.dropDownSelect
                        defaultValue="slide"
                        title="Animation type"
                        options={[
                                { value: '1', label: 'Slide'},
                                { value: '2', label: 'Fade'},
                                { value: '3', label: 'scroll'}
                            ]}
                        onChange={(newVal)=>this.props.onUpdate('animations_type', newVal)}/>

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
                            label="Vertical Scroll"
                            defaultValue={true}
                            onChange={(newVal)=>this.props.onUpdate('animations_verticalScroll', newVal)}/>
                    </div>
                </div>
            </div>
        )
    }
};
