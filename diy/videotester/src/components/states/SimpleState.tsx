import React, { ReactElement } from "react";

export type SimpleStateProps<V> = {
    label: string,
    value: V
}

export default class SimpleState<V> extends React.Component<SimpleStateProps<V>>{
    public constructor(props: SimpleStateProps<V>) {
        super(props);
    }

    public render(): ReactElement {
        return <div>
            <div className="video-elementary state label">
                {this.props.label}
            </div>
            <div className="video-elementary state value">
                {String(this.props.value)}
            </div>
        </div>
    }
}