import {Dayjs} from "dayjs";
import {ISectionObject} from "./ApiTypes";



export interface IModal {
    action: "open" | "new" | "report" | "null";
    name:  string | undefined;
    filial: ISectionObject | null | undefined;
    dateFrom: Dayjs | null;
    dateTo: Dayjs | null;
    description: string | null;
};


