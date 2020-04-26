import React from 'react';
import { videoElementEventsMap } from '../types/VideoElementEvents';

export type VideoDisplayProperties = {
    autoplay: boolean
    source: string,
    controls: boolean,
    loop: boolean,
    playing: boolean,
    disablePictureInPicture: boolean,
    crossOrigin: string | undefined,
    playsInline: boolean,
    eventListener: (event: Event) => void;
}


export type VideoDisplayState = VideoDisplayProperties & {
}

export const defaultProperties: Partial<VideoDisplayProperties> = {
    autoplay: false,
    controls: true,
    loop: false,
    disablePictureInPicture: false,
    crossOrigin: undefined,
    playsInline: false
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
        return <video ref={this._videoElement}
            autoPlay={this.props.autoplay}
            controls={this.props.controls}
            playsInline={this.props.playsInline}
            crossOrigin={this.props.crossOrigin}
            disablePictureInPicture={this.props.disablePictureInPicture}
            loop={this.props.loop}

            src={this.props.source}></video>;
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