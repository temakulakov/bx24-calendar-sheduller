import axios, { AxiosResponse } from 'axios';

interface BitrixRequestParams {
    type: string;
    ownerId: string;
}

interface BitrixResponse {
    result: any; // Тип данных зависит от ожидаемого формата ответа от Bitrix24
}

export const getCalendarSectionData = async (params: BitrixRequestParams): Promise<any> => {
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

// Пример использования:
// try {
//   const calendarData = await getCalendarSectionData({
//     type: 'company_calendar',
//     ownerId: 'yourOwnerIdHere', // Замените на реальный ownerId
//   });
//   console.log('Calendar data:', calendarData);
// } catch (error) {
//   console.error('Failed to fetch calendar data:', error);
// }
