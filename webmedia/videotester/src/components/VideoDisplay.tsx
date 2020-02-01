import React from 'react';

export type VideoDisplayProperties = {
    source: string,
    controls: boolean,
    loop: boolean,
    playing:boolean,
}


export type VideoDisplayState = VideoDisplayProperties & {
}

export const defaultProperties: Partial<VideoDisplayProperties> = {
    controls: true,
    loop: false,
}

export default class VideoDisplay extends React.Component<Partial<VideoDisplayProperties>> {
    public state: Partial<VideoDisplayProperties>;

    constructor(props: Partial<VideoDisplayProperties>) {
        super(props);
        this.state = {
            ...defaultProperties,
            ...props,
        };

        this._videoElement = React.createRef();
    }


    private _videoElement:React.RefObject<HTMLVideoElement>;

    render() {
        return <video ref={this._videoElement} controls={this.props.controls} src={this.props.source}></video>;
    }

    public componentDidUpdate():void{
        this.togglePlay();
    }
    
    private togglePlay():void{
        if(this.props.playing){
            this._videoElement.current?.play();
        }else{
            this._videoElement.current?.pause();
        }
    }
}