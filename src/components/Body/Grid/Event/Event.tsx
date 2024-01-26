import React from 'react';
import styles from './Event.module.scss';
import {IEventObject} from "../../../../types/ApiTypes";
import dayjs from "dayjs";
import {useRecoilValue} from "recoil";
import {sectionsAtom} from "../../../../store/atoms";

interface IEventProps {
    event: IEventObject | null;
};


export default function Event(props: IEventProps) {
    const sections = useRecoilValue(sectionsAtom);
    let styleEvent = {}
    if (sections) {
        console.log(sections[Number(props.event?.SECT_ID)]?.COLOR)
        styleEvent = {
            width: `${dayjs(props.event?.DATE_TO, 'DD.MM.YYYY hh:mm:ss').diff(dayjs(props.event?.DATE_FROM, 'DD.MM.YYYY hh:mm:ss'), 'minute') * 2.333}px`,
            backgroundColor: sections?.find((section, index) => {
                if (section && props.event) {
                    if (section.ID === props.event?.SECT_ID) {
                        return section.COLOR
                    }
                }
            })?.COLOR,
        };
    }

    return <div key={props.event?.ID} className={styles.root} style={styleEvent}><p>{props.event?.NAME}</p></div>
};