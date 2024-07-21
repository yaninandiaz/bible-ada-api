export interface MessageRequest {
    action: string,
    body: any | null,
}

export enum ResponseType {
    ERROR = "ERROR",
    SUCCESS = "SUCCESS",
}

export interface MessageResponse {
    responseType: ResponseType,
    message: string | null,
    body: any | null,
}