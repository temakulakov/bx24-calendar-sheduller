import dayjs, {Dayjs} from "dayjs";

export interface ISectionObject {
    ACCESS: object;
    CAL_DAV_CON: boolean;
    CAL_TYPE: "company_calendar";
    COLOR: string;
    CREATED_BY: string;
    DATE_CREATE: string;
    DESCRIPTION: string;
    EXPORT: object;
    EXTERNAL_TYPE: string;
    GAPI_CALENDAR_ID: null;
    ID: string;
    NAME: string;
    OWNER_ID: string;
    PAGE_TOKEN: null;
    PERM: object;
    SYNC_TOKEN: null;
    TEXT_COLOR: null;
    TIMESTAMP_X: string;
};

export interface IEventObject {
    ID: string;
    PARENT_ID: string;
    DELETED: string;
    CAL_TYPE: string;
    SYNC_STATUS?: null;
    OWNER_ID: string;
    EVENT_TYPE?: null;
    CREATED_BY: string;
    NAME: string;
    DATE_FROM: string;
    DATE_TO: string;
    TZ_FROM: string;
    TZ_TO: string;
    ORIGINAL_DATE_FROM?: null;
    TZ_OFFSET_FROM: string;
    TZ_OFFSET_TO: string;
    DATE_FROM_TS_UTC: string;
    DATE_TO_TS_UTC: string;
    TIMESTAMP_X: string;
    DATE_CREATE: string;
    DT_SKIP_TIME: string;
    DT_LENGTH: string;
    PRIVATE_EVENT: string;
    ACCESSIBILITY: string;
    IMPORTANCE: string;
    IS_MEETING: boolean;
    MEETING_HOST: string;
    MEETING_STATUS: string;
    MEETING: MEETING;
    LOCATION: string;
    REMIND?: (REMINDEntity)[] | null;
    COLOR: string;
    RRULE: string;
    EXDATE: string;
    ATTENDEES_CODES?: (string)[] | null;
    DAV_XML_ID: string;
    DAV_EXCH_LABEL?: null;
    G_EVENT_ID?: null;
    CAL_DAV_LABEL?: null;
    VERSION: string;
    RECURRENCE_ID?: null;
    RELATIONS?: null;
    SECTION_ID: string;
    SECT_ID: string;
    REL?: null;
    UF_CRM_CAL_EVENT: boolean;
    UF_WEBDAV_CAL_EVENT: boolean;
    ATTENDEE_LIST?: (ATTENDEELISTEntity)[] | null;
    attendeesEntityList?: (AttendeesEntityListEntity)[] | null;
}

export interface MEETING {
    HOST_NAME: string;
    NOTIFY: boolean;
    REINVITE: boolean;
    ALLOW_INVITE: boolean;
    MEETING_CREATOR: number;
    HIDE_GUESTS: boolean;
    MAIL_FROM: string;
}
export interface REMINDEntity {
    type: string;
    before: number;
    time: number;
}
export interface ATTENDEELISTEntity {
    id: number;
    entryId: string;
    status: string;
}
export interface AttendeesEntityListEntity {
    entityId: string;
    id: number;
}

export interface IRequestSections {
    type: 'company_calendar',
    ownerId: '',
}

export interface IRequestEvents {
    type: 'company_calendar',
    ownerId: '',
    from: dayjs.Dayjs,
    to: dayjs.Dayjs,
}