import UI from 'editor-ui-lib';
import React from 'react'

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="How does this gallery look?"/>
                <hr className="divider-long"/>

                <UI.slider
                    title="Columns"
                    min={1}
                    max={36}
                    defaultValue={7}
                    onChange={(newVal)=>this.props.onUpdate('layout_columns', newVal)}/>

                <hr className="divider-long"/>

                <UI.slider
                    title="Spacing (px)"
                    min={0}
                    max={50}
                    defaultValue={10}
                    onChange={(newVal)=>this.props.onUpdate('layout_spacing', newVal)}/>
            </div>
        )
    }
}