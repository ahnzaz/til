import { Button } from "@material-ui/core";
import React, { ReactNode } from "react";

export type PauseButtonProps = {
    onClick:()=>void;
}

export default class PauseButton extends React.Component<PauseButtonProps>{

    constructor(props:PauseButtonProps){
        super(props);

        this.onClick = this.onClick.bind(this);
    }


    public render():ReactNode{
        return <Button variant="contained" color="primary" onClick={this.onClick}>
            Pause
        </Button>
    }

    public onClick():void{
        this.props.onClick();
    }
}