import React from 'react';
import styles from './Grid.module.scss';
import {useRecoilValue} from "recoil";
import {eventsAtom, sectionsAtom} from "../../../store/atoms";
import {IEventObject} from "../../../types/ApiTypes";
import Event from "./Event/Event";

export default function Grid() {
    const sections = useRecoilValue(sectionsAtom);
    const events = useRecoilValue(eventsAtom);

    let eventsOfSections: Array<Array<IEventObject | null>> = [];

    events?.map((event) => {
        eventsOfSections[parseInt(event.SECTION_ID)] ?
            eventsOfSections[parseInt(event.SECTION_ID)].push(event) :
            eventsOfSections[parseInt(event.SECTION_ID)] = [event];
    });
    console.log("eventsOfSections", eventsOfSections);

    return <div className={styles.root} style={{width: "3360px"}}>
        {
            sections && sections.map((section) => (
                <div key={section.ID} className={styles.row}>
                    {
                        eventsOfSections[parseInt(section.ID)] !== undefined ?
                            eventsOfSections[parseInt(section.ID)].map((event, index) => <Event event={event}/>) :
                            null
                    }
                </div>
            ))
        }
    </div>
};