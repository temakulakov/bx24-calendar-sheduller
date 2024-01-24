import React from 'react';
import styles from './CurrentDateView.module.scss';
import {Month, WeekDay} from "../../../types/Consts";
import {useRecoilValue} from "recoil";
import {dateAtom} from "../../../store/atoms";

export default function CurrentDateView() {
    const date = useRecoilValue(dateAtom);

    return <div className={styles.root}>
        <h2>{date?.date()}</h2>
        <h2>{Month[date?.month()]}</h2>
        <h2>{date?.year()}</h2>
        <h2>{WeekDay[date?.day() - 1]}</h2>
    </div>
};