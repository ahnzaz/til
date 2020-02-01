import React from 'react';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SourceInput from './SourceInput';
import VideoDisplay from './VideoDisplay';

type VideoElementProps = {
    source?: string,
    controls?: boolean,
}

type VideoElementState = VideoElementProps &{
    playing:boolean;
}

const defaultState:Partial<VideoElementState> = {
    source: "https://www.w3schools.com/html/mov_bbb.mp4",
    controls: false,
    playing:false,
}

export default class VideoElement extends React.Component<Partial<VideoElementProps>, Partial<VideoElementState>> implements Partial<HTMLVideoElement>{
    public state: Partial<VideoElementState>;

    constructor(props: Partial<VideoElementProps>) {
        super(props);

        this.state = {
            ...defaultState,
            ...props,
        };
        
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    render() {
        return <div>
            <VideoDisplay source={this.state.source} controls={this.props.controls} playing={this.state.playing}></VideoDisplay>
            <SourceInput onClick={(source: string): void => this.setSrc(source)}></SourceInput>
            <div>
                <PlayButton onClick={this.play}></PlayButton>
                <PauseButton onClick={this.pause}></PauseButton>
            </div>
        </div>
    }

    public play():Promise<void>{
        this.setState({
            playing:true,
        });

        return Promise.resolve();
    }

    public pause():void{
        this.setState({
            playing:false,
        })
    }

    public setSrc(source: string): void {
        this.setState({
            source,
        })
    }
}