import React from 'react';
import {DateCalendar, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {useRecoilState} from "recoil";
import {dateAtom} from "../../store/atoms";
import 'dayjs/locale/ru';

export default function ControllerDateSide() {
    const [date, setDate] = useRecoilState(dateAtom);
    return  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ru"}>
        <DateCalendar
            value={date}
            onChange={(newValue) => setDate(newValue)}
        />
    </LocalizationProvider>
};