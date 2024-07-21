export interface MessageRequest {
    action: string,
    body: any | null,
}

export enum ResponseType {
    ERROR,
    SUCCESS,
}

export interface MessageResponse {
    responseType: ResponseType,
    message: string | null,
    body: any | null,
}