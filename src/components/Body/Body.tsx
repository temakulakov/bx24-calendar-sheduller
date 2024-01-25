import React from 'react';
import styles from './Body.module.scss';
import Grid from "./Grid/Grid";
import Sections from "./Sections/Sections";
import TimeLine from "./Grid/TimeLine/TimeLine";

export default function Body() {

    const [scrollPositionY, setScrollPositionY] = React.useState(0);
    const [scrollPositionX, setScrollPositionX] = React.useState(0);

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
        };

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
    }, [scrollPositionX, scrollPositionY])
    return <>
        <div className={styles.sections} onScroll={() => {
            setScrollPositionY(0)
        }} ref={sectionsContainerRef}><Sections/></div>
        <div className={styles.body}>
            <div className={styles.timeLine} ref={timeLineContainerRef}><TimeLine/></div>
            <div className={styles.grid} ref={gridContainerRef}><Grid/></div>
        </div>
    </>
};