import React from 'react';
import SourceInput from './SourceInput';
import VideoDisplay from './VideoDisplay';

const defaultState = {
    source: "https://www.w3schools.com/html/mov_bbb.mp4",
}

type VideoElementProperties = {
    source: string,
}

export default class VideoElement extends React.Component {
    public state: VideoElementProperties;

    constructor(props: VideoElementProperties) {
        super(props);
        this.state = {
            ...defaultState,
            ...props,
        };
    }

    render() {
        return <div>
            <VideoDisplay source={this.state.source}></VideoDisplay>
            <SourceInput onClick={(source: string): void => this.setSrc(source)}></SourceInput>
        </div>
    }

    public setSrc(source: string): void {
        this.setState({
            source,
        })
    }
}