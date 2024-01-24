import React from 'react';
import styles from './ControllerDate.module.scss';
import {Button, ButtonGroup} from "@mui/material";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import {useRecoilState} from "recoil";
import {dateAtom} from "../../../store/atoms";
import dayjs from "dayjs";



export default function ControllerDate() {
    const [date, setDate] = useRecoilState(dateAtom);

    const actionDate = (action: "back" | "today" | "next"): void => {
        switch (action) {
            case "back":
                setDate((currentDate) => currentDate.subtract(1, 'day'));
                break;
            case "today":
                setDate(() => dayjs());
                break;
            case "next":
                setDate((currentDate) => currentDate.add(1, 'day'));
                break;
        }
    };

    const Buttons: Array<JSX.Element> = [
        <Button key="one" onClick={() => actionDate("back")}><KeyboardArrowLeftRoundedIcon/></Button>,
        <Button key="two" onClick={() => actionDate("today")}>{"Сегодня"}</Button>,
        <Button key="three" onClick={() => actionDate("next")}><KeyboardArrowLeftRoundedIcon style={{rotate: '180deg'}}/></Button>,
    ];

    return <div className={styles.root}>
        <Button
            color="secondary"
            variant="outlined"
            endIcon={<AssessmentOutlinedIcon />}
            className={styles.report}
        >{"Отчет"}</Button>
        <ButtonGroup
            color="secondary"
            orientation="horizontal"
            variant="outlined"
        >
            {Buttons}
        </ButtonGroup>
    </div>
};