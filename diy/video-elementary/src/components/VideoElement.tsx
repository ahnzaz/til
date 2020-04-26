import { Checkbox, FormControl, FormGroup, FormControlLabel } from '@material-ui/core';
import React from 'react';
import snapshot, { defaultEventProps, defaultVideoElementProps } from '../utils/snapshot';
import isInstanceOf from './../utils/isInstanceOf';
import EventList from './EventList';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SourceInput from './SourceInput';
import StatesGrid from './states/StatesGrid';
import VideoDisplay from './VideoDisplay';

type VideoElementProps = {
    source?: string,
    controls?: boolean,
    autoplay: boolean,
    loop: boolean,
}

type VideoElementState = VideoElementProps & {
    playing: boolean;
    events: Partial<Event>[];
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
            const clonnedVideo = event.target && isInstanceOf(event.target, HTMLVideoElement) && snapshot(event.target as HTMLVideoElement, defaultVideoElementProps) as EventTarget;

            return {
                events: [...state.events || [], {
                    ...snapshot(event, defaultEventProps),
                    ...clonnedVideo && {
                        target: clonnedVideo,
                        currentTarget: clonnedVideo,
                    }
                }],
                video: (event.target as HTMLVideoElement)?.tagName === 'VIDEO' ? event.target as HTMLVideoElement : state.video,
            };
        })
    };

    render() {
        return <div>
            <VideoDisplay
                autoplay={this.state.autoplay}
                source={this.state.source}
                controls={this.state.controls}
                playing={this.state.playing}
                eventListener={this._eventListener}></VideoDisplay>
            <SourceInput onClick={(source: string): void => this.setSrc(source)}></SourceInput>
            <div>
                <PlayButton onClick={this.play}></PlayButton>
                <PauseButton onClick={this.pause}></PauseButton>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={this.setAutoplay.bind(this)}
                            />
                        }
                        label="autoplay"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={this.setControls.bind(this)}
                            />
                        }
                        label="controls"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={this.setLoop.bind(this)}
                                value="loop" />
                        }
                        label="loop"
                    />
                </FormGroup>
            </div>
            <div>
                <StatesGrid video={this.state.video}></StatesGrid>
            </div>
            <div>
                <EventList events={this.state.events}></EventList>
            </div>
        </div>
    }

    private setAutoplay(_: any, autoplay: boolean): void {
        this.setState({
            autoplay
        })
    }

    private setControls(_: any, controls: boolean): void {
        this.setState({
            controls,
        })
    }

    private setLoop(_: any, loop: boolean): void {
        this.setState({
            loop,
        })
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