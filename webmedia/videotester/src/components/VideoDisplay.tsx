import React from 'react';

export type VideoDisplayProperties = {
    source: string,
    controls: boolean,
    loop: boolean,
}

export const defaultProperties: Partial<VideoDisplayProperties> = {
    controls: true,
    loop: false,
}

export type VideoDisplayState = VideoDisplayProperties & {
}

export default class VideoDisplay extends React.Component<Partial<VideoDisplayProperties>> {
    public state: Partial<VideoDisplayProperties>;

    constructor(props: Partial<VideoDisplayProperties>) {
        super(props);
        this.state = {
            ...defaultProperties,
            ...props,
        }
    }

    render() {
        return <video controls src={this.state.source}></video>
    }

    public set source(source: string) {
        this.state = {
            ...this.state,
            source,
        }
    }
}