import React from 'react';
import { videoElementEventsMap } from '../types/VideoElementEvents';

export type VideoDisplayProperties = {
    source: string,
    controls: boolean,
    loop: boolean,
    playing: boolean,
    eventListener: (event: Event) => void;
}


export type VideoDisplayState = VideoDisplayProperties & {
}

export const defaultProperties: Partial<VideoDisplayProperties> = {
    controls: true,
    loop: false,
}

export default class VideoDisplay extends React.Component<Partial<VideoDisplayProperties>> {
    private _eventListener: ((event: Event) => void);
    private _videoElement: React.RefObject<HTMLVideoElement>;

    public state: Partial<VideoDisplayProperties>;

    constructor(props: Partial<VideoDisplayProperties>) {
        super(props);
        this.state = {
            ...defaultProperties,
            ...props,
        };

        this._videoElement = React.createRef();
        this._eventListener = props.eventListener?.bind(this) ?? function () { };
    }

    render() {
        return <video ref={this._videoElement} controls={this.props.controls} src={this.props.source}></video>;
    }

    public componentDidMount(): void {
        this._eventListener && videoElementEventsMap.forEach((type: keyof HTMLVideoElementEventMap): void => this._videoElement.current?.addEventListener(type, this._eventListener))
    }

    public componentWillUnmount(): void {

    }

    public componentDidUpdate(): void {
        this.togglePlay();
    }

    private togglePlay(): void {
        if (this.props.playing) {
            this._videoElement.current?.play();
        } else {
            this._videoElement.current?.pause();
        }
    }
}