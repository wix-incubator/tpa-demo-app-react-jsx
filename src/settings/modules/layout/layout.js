import UI from 'editor-ui-lib';
import React from 'react'

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <UI.divider long={true} />
                <UI.sectionDividerLabeled>How does this gallery look?</UI.sectionDividerLabeled>
                <UI.divider long={true} />

                <UI.slider
                    title="Columns"
                    min={1}
                    max={36}
                    defaultValue={7}
                    onChange={(newVal)=>this.props.onUpdate('layout_columns', newVal)}/>

                <UI.divider long={true} />

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