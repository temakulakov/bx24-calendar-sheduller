import React from 'react';
import styles from './App.module.scss'
import Header from "./components/Header/Header";
import "ag-grid-enterprise";
import ControllerDateSide from "./components/ControllerDateSide/ControllerDateSide";
import Body from "./components/Body/Body";
import {getCalendarSectionData} from "./services/bx24-rest-webhook/sections";
import {getCalendarEventsData} from "./services/bx24-rest-webhook/events";
import {useRecoilState, useRecoilValue} from "recoil";
import {dateAtom, eventsAtom, sectionsAtom} from "./store/atoms";
import dayjs from "dayjs";
import {IRequestEvents} from "./types/ApiTypes";



function App() {
    const [events, setEvents] = useRecoilState(eventsAtom);
    const [sections, setSections] = useRecoilState(sectionsAtom);
    const date = useRecoilValue(dateAtom);

    const fetchSections = async () => {
        try {
            const calendarData = await getCalendarSectionData();
            setSections(calendarData);
        } catch (error) {
            console.error('Failed to fetch sections:', error);
        }
    };

    const fetchEvents = async (action: IRequestEvents = {type: 'company_calendar', ownerId: '', from: date, to: date}) => {
        // Пример использования:
        try {
            const calendarData = await getCalendarEventsData(action);
            setEvents(calendarData);
        } catch (error) {
            console.error('Failed to fetch events:', error);
        }
    }

    React.useEffect(() => {
        fetchSections();
    }, []);

    React.useEffect(() =>{
        fetchEvents({type: 'company_calendar', ownerId: '', from: date, to: date});
    }, [date]);

    React.useEffect(() => {
        console.log("Events", events);
    }, [events])

    return (
        <div className={styles.root}>
            <div className={styles.leftSection}>
                <div className={styles.header}><Header/></div>
                <div className={styles.body}><Body/></div>
            </div>
            <div className={styles.rightSection}>
                <ControllerDateSide/>
            </div>
        </div>
    );
}

export default App;
