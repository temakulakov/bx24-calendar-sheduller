import axios, { AxiosResponse } from 'axios';
import {IEventObject, IRequestEvent, IRequestEvents} from "../../types/ApiTypes";
import dayjs from "dayjs";


interface BitrixResponse {
    result: Array<IEventObject>;
}

export const getCalendarEventsData = async (params: IRequestEvents = {type: 'company_calendar', ownerId: '', from: dayjs(), to: dayjs()}): Promise<Array<IEventObject>> => {
    try {
        const response: AxiosResponse<BitrixResponse> = await axios.post(
            'https://intranet.gctm.ru/rest/1552/jx5itnlnk81dxcol/calendar.event.get',
            {
                type: params.type,
                ownerId: params.ownerId,
                from: params.from.format('YYYY-MM-DD'),
                to: params.to.format('YYYY-MM-DD'),
            }
        );
        return response.data.result;
    } catch (error) {
        console.error('Error fetching Bitrix24 data:', error);
        throw error;
    }
};

export const getCalendarEventData = async (params: IRequestEvent = { id: 0 }): Promise<any> => {
    try {
        const response: AxiosResponse<BitrixResponse> = await axios.post(
            'https://intranet.gctm.ru/rest/1552/jx5itnlnk81dxcol/calendar.event.getbyid',
            params
        );
        return response.data.result;
    } catch (error) {
        console.error('Error fetching Bitrix24 data:', error);
        throw error;
    }
};

