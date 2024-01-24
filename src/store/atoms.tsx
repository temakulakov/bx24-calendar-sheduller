import {atom} from "recoil";
import dayjs from "dayjs";
import {IModal} from "../types/AppTypes";
import {IEventObject, ISectionObject} from "../types/ApiTypes";

export const modalAtom = atom<IModal>({
    key: 'modalAtom',
    default: {
        action: "null",
        name: "",
        filial: null,
        dateFrom: dayjs(dayjs().subtract(1, 'hour')),
        dateTo: dayjs(dayjs().add(1, 'hour')),
        description: null,
    }
});

export const dateAtom = atom<dayjs.Dayjs>({
    key: 'date',
    default: dayjs()
});

export const sectionsAtom = atom<Array<ISectionObject> | undefined>({
    key: 'sections',
    default: undefined
});

export const eventsAtom = atom<Array<IEventObject> | undefined>({
    key: 'events',
    default: undefined
})


