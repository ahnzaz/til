import { Grid, Paper } from "@material-ui/core";
import React, { ReactElement } from "react";
import SimpleState from "./SimpleState";

export type StatesGridProps = {
    video: HTMLVideoElement
}

export default class StatesGrid extends React.Component<Partial<StatesGridProps>> {
    constructor(props: Partial<StatesGridProps>) {
        super(props);
    }

    public render(): ReactElement {
        return <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper>
                    <SimpleState label="src" value={this.props.video?.src}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="paused" value={this.props.video?.paused}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="volume" value={this.props.video?.volume}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="readyState" value={this.props.video?.readyState}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="networkState" value={this.props.video?.networkState}></SimpleState>
                </Paper>
            </Grid>
        </Grid>
    }
}