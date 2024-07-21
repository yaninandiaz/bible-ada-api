export enum RequestType {
    BIBLE_GET_ALL,
    BIBLE_GET_BY_ID,
    BOOK_GET_ALL,
    BOOK_GET_BY_ID,
    CHAPTER_GET_ALL,
}

export enum Action {
    REQUEST,
    RESPONSE,
}

export interface Log {
    type: RequestType,
    action: Action,
    params: any | null,
    body: any | null,
}