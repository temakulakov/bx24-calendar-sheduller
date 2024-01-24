import React from 'react';
import styles from './Event.module.scss';
import {IEventObject} from "../../../../types/ApiTypes";

interface IEventProps {
    event: IEventObject | null;
}

export default function Event(props: IEventProps) {
    return <div key={props.event?.ID}><p>{props.event?.NAME}</p></div>
};