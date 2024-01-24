import React from 'react';
import styles from './Header.module.scss';
import CurrentDateView from "./CurrentDateView/CurrentDateView";
import ControllerDate from "./ControllerDate/ControllerDate";

export default function Header() {
    return <div className={styles.root}>
        <div className={styles.leftSide}><CurrentDateView/></div>
        <div className={styles.rightSide}><ControllerDate/></div>

    </div>
};