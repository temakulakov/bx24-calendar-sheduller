import React from 'react';
import styles from './Body.module.scss';
import Grid from "./Grid/Grid";
import Sections from "./Sections/Sections";
import TimeLine from "./Grid/TimeLine/TimeLine";
import dayjs from "dayjs";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

export default function Body() {

    const [scrollPositionY, setScrollPositionY] = React.useState(0);
    const [scrollPositionX, setScrollPositionX] = React.useState(3360 / 24 * (dayjs().hour() - 2));

    const [intervalId, setIntervalId] = React.useState<NodeJS.Timer | null>(null);


    const sectionsContainerRef = React.useRef<HTMLDivElement>(null);
    const gridContainerRef = React.useRef<HTMLDivElement>(null);
    const timeLineContainerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (sectionsContainerRef.current && gridContainerRef.current) {
            sectionsContainerRef.current.addEventListener('scroll', () => {
                if (sectionsContainerRef.current) {
                    setScrollPositionY(sectionsContainerRef.current.scrollTop)
                }
            });
            gridContainerRef.current.addEventListener('scroll', () => {
                if (gridContainerRef.current) {
                    setScrollPositionY(gridContainerRef.current.scrollTop);
                }
            });
        }
        ;

        if (timeLineContainerRef.current && gridContainerRef.current) {
            timeLineContainerRef.current.addEventListener('scroll', () => {
                if (timeLineContainerRef.current) {
                    setScrollPositionX(timeLineContainerRef.current.scrollLeft);
                }
            });
            gridContainerRef.current.addEventListener('scroll', () => {
                if (gridContainerRef.current) {
                    setScrollPositionX(gridContainerRef.current.scrollLeft);
                }
            });
        }
    }, []);


    React.useEffect(() => {
        if (sectionsContainerRef.current && gridContainerRef.current) {
            sectionsContainerRef.current.scrollTop = scrollPositionY;
            gridContainerRef.current.scrollTop = scrollPositionY;
        }

        if (timeLineContainerRef.current && gridContainerRef.current) {
            timeLineContainerRef.current.scrollLeft = scrollPositionX;
            gridContainerRef.current.scrollLeft = scrollPositionX;
        }
        console.log("scrollPositionY");
        console.log(scrollPositionY);
    }, [scrollPositionX, scrollPositionY]);


    const handleMouseEnter = (type: "minus" | "plus") => {
        let el = scrollPositionX;
        const id = setInterval(() => {
            // Ваш код, который выполняется каждый интервал
            setScrollPositionX(el);
            type === "minus" ? el -= 15 : el += 15;
        }, 10); // Здесь 1000 миллисекунд (1 секунда) - просто пример, замените на ваш интервал
        setIntervalId(id);
    };

    const handleMouseLeave = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    return <>
        <div className={styles.sections} onScroll={() => {
            setScrollPositionY(0)
        }} ref={sectionsContainerRef}><Sections/></div>
        <div className={styles.body}>
            <div className={styles.timeLine} ref={timeLineContainerRef}><TimeLine/></div>
            <div className={styles.grid} ref={gridContainerRef}>
                <div className={styles.leftPetal} onMouseEnter={() => handleMouseEnter("minus")} onMouseLeave={() => handleMouseLeave()}><KeyboardArrowLeftRoundedIcon/></div>
                    <Grid/>
                <div className={styles.rightPetal} onMouseEnter={() => handleMouseEnter("plus")} onMouseLeave={() => handleMouseLeave()}><KeyboardArrowLeftRoundedIcon style={{rotate: '180deg'}}/></div>
            </div>
        </div>
    </>
};