import { Grid, Paper } from "@material-ui/core";
import React, { ReactElement } from "react";
import SimpleState from "./SimpleState";
import { stringifyBuffered } from "../../utils/stringify/stringifyBuffered";
import stringifyVideoPlaybackQuality from "../../utils/stringify/stringifyVideoPlaybackQuality";

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
            <Grid item xs={12}>
                <Paper>
                    <SimpleState label="currentSrc" value={this.props.video?.currentSrc}></SimpleState>
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
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="videoWidth" value={this.props.video?.videoWidth}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="videoHeight" value={this.props.video?.videoWidth}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="width" value={this.props.video?.width}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="height" value={this.props.video?.height}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="currentTime" value={this.props.video?.currentTime}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="poster" value={this.props.video?.poster}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="duration" value={this.props.video?.duration}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="ended" value={this.props.video?.ended}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="playbackRate" value={this.props.video?.playbackRate}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="defaultPlaybackRate" value={this.props.video?.defaultPlaybackRate}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="autoplay" value={this.props.video?.autoplay}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="defaultMuted" value={this.props.video?.defaultMuted}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="loop" value={this.props.video?.loop}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="buffered" value={stringifyBuffered(this.props.video?.buffered)}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="getVideoPlaybackQuality" value={stringifyVideoPlaybackQuality(this.props.video?.getVideoPlaybackQuality())}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="seeking" value={this.props.video?.seeking}></SimpleState>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <SimpleState label="seekable" value={this.props.video?.seekable}></SimpleState>
                </Paper>
            </Grid>
        </Grid>
    }
}