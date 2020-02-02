import React from 'react';
import EventList from './EventList';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SourceInput from './SourceInput';
import StatesGrid from './states/StatesGrid';
import VideoDisplay from './VideoDisplay';

type VideoElementProps = {
    source?: string,
    controls?: boolean,
}

type VideoElementState = VideoElementProps & {
    playing: boolean;
    events: Event[];
    video: HTMLVideoElement
}

const defaultState: Partial<VideoElementState> = {
    source: "https://www.w3schools.com/html/mov_bbb.mp4",
    controls: false,
    playing: false,
    events: [],
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

        this._eventListener = this._eventListener.bind(this);
    }

    private _eventListener(event: Event) {
        this.setState((state: Partial<VideoElementState>): Partial<VideoElementState> => {
            return {
                events: [...state.events || [], event],
                video: ((event.target as HTMLVideoElement)?.tagName === "VIDEO" ? event.target : state.video) as HTMLVideoElement
            }
        })
    };

    render() {
        return <div>
            <VideoDisplay source={this.state.source} controls={this.props.controls} playing={this.state.playing} eventListener={this._eventListener}></VideoDisplay>
            <SourceInput onClick={(source: string): void => this.setSrc(source)}></SourceInput>
            <div>
                <PlayButton onClick={this.play}></PlayButton>
                <PauseButton onClick={this.pause}></PauseButton>
            </div>
            <div>
                <StatesGrid video={this.state.video}></StatesGrid>
            </div>
            <div>
                <EventList events={this.state.events}></EventList>
            </div>
        </div>
    }

    public play(): Promise<void> {
        this.setState({
            playing: true,
        });

        return Promise.resolve();
    }

    public pause(): void {
        this.setState({
            playing: false,
        })
    }

    public setSrc(source: string): void {
        this.setState({
            source,
        })
    }
}