import React from 'react';
import styles from './Event.module.scss';
import {IEventObject, IFullEventObject} from "../../../../types/ApiTypes";
import dayjs from "dayjs";
import {useRecoilValue} from "recoil";
import {sectionsAtom} from "../../../../store/atoms";
import {getCalendarEventData} from "../../../../services/bx24-rest-webhook/events";
import {Position} from "../../../../types/AppTypes";

interface IEventProps {
    event: IEventObject | null;
};




export default function Event(props: IEventProps) {
    const sections = useRecoilValue(sectionsAtom);
    const sectionColor = sections?.find((section, index) => {
        if (section && props.event) {
            if (section.ID === props.event?.SECT_ID) {
                return section.COLOR
            }
        }
    })?.COLOR;
    const [fullEvent, setFullEvent] = React.useState<IFullEventObject | undefined>(undefined);

    const [position, setPosition] = React.useState<Position>({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = React.useState(false);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const fetchEvent = async () => {
        // Пример использования:
        try {
            const calendarData = await getCalendarEventData({id: Number(props.event?.ID)});
            setFullEvent(calendarData);
        } catch (error) {
            console.error('Failed to fetch events:', error);
        }
    };

    React.useEffect(() => {
        fetchEvent();
    }, []);


    let styleEvent = {}
    if (sections) {
        console.log(sections[Number(props.event?.SECT_ID)]?.COLOR);
        const startOfDay = dayjs(fullEvent?.DATE_FROM).startOf('day');

        styleEvent = {
            width: `${dayjs(props.event?.DATE_TO, 'DD.MM.YYYY hh:mm:ss').diff(dayjs(props.event?.DATE_FROM, 'DD.MM.YYYY hh:mm:ss'), 'minute') * 2.333 - 3}px`,
            backgroundColor: sectionColor,
            left: `${dayjs(props.event?.DATE_FROM, 'DD.MM.YYYY hh:mm:ss').diff(startOfDay, 'minute') * 2.3333333 + 60}px`,
        ...(isVisible && {
            boxShadow: `${sectionColor} 0px 0px 0px 2px`,
        })
        };
    };


    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    return <>
        <div
            key={props.event?.ID}
            className={styles.root}
            style={styleEvent}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p>{props.event?.NAME}</p>
        </div>
        {isVisible && (
            <div
                className={styles.popup}
                style={{
                    top: position.y + 10,
                    left: position.x,
                    zIndex: '9999'
                }}
            >
                <div className={styles.linePopup} style={{backgroundColor: sectionColor}}></div>
                <div className={styles.headerPopup}>{fullEvent?.NAME}</div>
                <div className={styles.timePopup}>
                    <p>{`${dayjs(fullEvent?.DATE_FROM, 'DD.MM.YYYY hh:mm:ss').hour()}:${dayjs(fullEvent?.DATE_FROM, 'DD.MM.YYYY hh:mm:ss').minute()}`}</p>

                    <p>{`${dayjs(fullEvent?.DATE_TO, 'DD.MM.YYYY hh:mm:ss').hour()}:${dayjs(fullEvent?.DATE_TO, 'DD.MM.YYYY hh:mm:ss').minute() === 0 
                        ? "00" : dayjs(fullEvent?.DATE_TO, 'DD.MM.YYYY hh:mm:ss').minute()}`}</p>
                </div>
                {fullEvent?.["~DESCRIPTION"] === '' ? null : <div className={styles.descriptionPopup}>
                    <p>{`${fullEvent?.["~DESCRIPTION"]}`}</p>
                </div>}

            </div>
        )}
    </>
};