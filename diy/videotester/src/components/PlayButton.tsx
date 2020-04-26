import { Button } from "@material-ui/core";
import React, { ReactNode } from "react";

export type PlayButtonProps = {
    onClick:()=>void;
}

export default class PlayButton extends React.Component<PlayButtonProps>{

    constructor(props:PlayButtonProps){
        super(props);

        this.onClick = this.onClick.bind(this);
    }


    public render():ReactNode{
        return <Button variant="contained" color="primary" onClick={this.onClick}>
            Play
        </Button>
    }

    public onClick():void{
        this.props.onClick();
    }
}