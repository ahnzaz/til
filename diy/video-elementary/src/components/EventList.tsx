import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { ReactElement } from "react";

export type EventListProps = {
    events: Partial<Event>[]
}

export type EventListStates = EventListProps & {
}

export default class EventList extends React.Component<Partial<EventListProps>, Partial<EventListStates>> {

    public constructor(props: Partial<EventListProps>) {
        super(props);

        this.state = {
            events: [...props.events || []],
        }
    }

    public render(): ReactElement {
        return <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">
                            Timestamp
                        </TableCell>
                        <TableCell align="center">
                            Type
                        </TableCell>
                        <TableCell align="center">
                            ReadyState
                        </TableCell>
                        <TableCell align="center">
                            NetworkState
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        this.props.events?.map((event: Partial<Event>, idx: number): ReactElement => {
                            const eventTarget: HTMLVideoElement = event.target as HTMLVideoElement;
                            return <TableRow key={idx}>
                                <TableCell>
                                    {`${Math.round(event.timeStamp ?? 0)}, (${Math.round((event.timeStamp ?? 0) - (this.props.events?.[0].timeStamp ?? 0))})`}
                                </TableCell>
                                <TableCell>
                                    {event.type}
                                </TableCell>
                                <TableCell>
                                    {eventTarget?.readyState}
                                </TableCell>
                                <TableCell>
                                    {eventTarget?.networkState}
                                </TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    }
}