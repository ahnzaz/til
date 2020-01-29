import React from 'react';
import SourceInput from './SourceInput';
import VideoDisplay from './VideoDisplay';

const defaultProps = {
    source: "https://www.w3schools.com/html/mov_bbb.mp4",
    controls: false,
}

type VideoElementProperties = {
    source?: string,
    controls?: boolean,
}

export default class VideoElement extends React.Component<VideoElementProperties> {
    public state: VideoElementProperties;

    constructor(props: VideoElementProperties) {
        super({
            ...props,
            ...defaultProps
        });
        this.state = {
            ...defaultProps,
            ...props,
        };
    }

    render() {
        return <div>
            <VideoDisplay source={this.state.source} controls={this.props.controls}></VideoDisplay>
            <SourceInput onClick={(source: string): void => this.setSrc(source)}></SourceInput>
        </div>
    }

    public setSrc(source: string): void {
        this.setState({
            source,
        })
    }
}