import NodeCache = require("node-cache");

export interface Config {
    usecache?: boolean;
    rejectUnauthorized?: boolean;
    url?: string,
    language?: string,
    dateformat?: Intl.DateTimeFormatOptions
    replacedates?: boolean,
    type?: "icloud" | "caldav" | "ical",
    username?: string,
    password?: string,
    calendar?: string,
    filter?: string,
    filter2?: string,
    filterProperty?: string,
    filterOperator?: string,
    trigger?: string,
    preview?: number | string,
    previewUnits?: string,
    pastview?: number | string,
    pastviewUnits?: string
    offsetUnits?: string,
    offset?: number,
    now?: Date,
    timezone?: string;
    includeTodo?: boolean;
    includeEvents?: boolean;
    eventtypes?: any;
    cache?: NodeCache;
}