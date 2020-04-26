import { Button, TextField } from '@material-ui/core';
import React from 'react';

export type SourceInputProperties = {
    source: string;
    onClick?: (source: string) => void;
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
            <TextField className="source-input" defaultValue={this.state.source} onChange={(event: any): void => this.setSource(event)} />
            <Button variant="contained" onClick={() => this.onClick()}>Select</Button>
        </div>
    }

    public setSource(event: any): void {
        this.setState({
            ...this.state,
            source: event.target.value,
        })
    }

    public onClick(): void {
        this.state.onClick?.(this.state.source);
    }
}