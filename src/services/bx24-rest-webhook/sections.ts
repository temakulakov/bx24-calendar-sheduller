import axios, { AxiosResponse } from 'axios';
import {IRequestSections, ISectionObject} from "../../types/ApiTypes";


interface BitrixResponse {
    result: Array<ISectionObject>
}

export const getCalendarSectionData = async (params: IRequestSections = {type: 'company_calendar', ownerId: ''}): Promise<Array<ISectionObject>> => {
    try {
        const response: AxiosResponse<BitrixResponse> = await axios.post(
            'https://intranet.gctm.ru/rest/1552/jx5itnlnk81dxcol/calendar.section.get',
            params
        );

        return response.data.result;
    } catch (error) {
        console.error('Error fetching Bitrix24 data:', error);
        throw error;
    }
};


