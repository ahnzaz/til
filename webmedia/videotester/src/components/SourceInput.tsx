import { Button, TextField } from '@material-ui/core';
import React from 'react';

export type SourceInputProperties = {
    source: string;
}

const defaultState: SourceInputProperties = {
    source: "https://www.w3schools.com/html/mov_bbb.mp4",
}

export default class SourceInput extends React.Component<Partial<SourceInputProperties>> {
    public state: SourceInputProperties
    constructor(props: SourceInputProperties) {
        super(props);

        this.state = {
            ...defaultState,
            ...props
        }
    }

    render() {
        return <div>
            <TextField className="source-input" value={this.state.source} />
            <Button variant="contained">Select</Button>
        </div>
    }
}