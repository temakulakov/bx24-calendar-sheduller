import React from 'react';
import styles from './TimeLine.module.scss';


const hours = Array.from({ length: 24 }, (_, i) => i);

export default function TimeLine() {
    return <div className={styles.timeline}>
        {hours.map((hour, index) => (
                <div key={index} className={styles.hourBlock}>
                    <span>{hour}</span>
                </div>
        ))}
    </div>
};