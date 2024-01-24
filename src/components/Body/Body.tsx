import React from 'react';
import styles from './Body.module.scss';
import Grid from "./Grid/Grid";
import Sections from "./Sections/Sections";
import TimeLine from "./Grid/TimeLine/TimeLine";

export default function Body() {
    return <>
        <div className={styles.sections}><Sections/></div>
        <div className={styles.body}>
            <div className={styles.timeLine}><TimeLine/></div>
            <div className={styles.grid} style={{width: "3360px"}}><Grid/></div>
        </div>
    </>
};