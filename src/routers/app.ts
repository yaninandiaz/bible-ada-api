import { ERROR_EMPTY_ACTION, ERROR_EMPTY_MESSAGE_REQUEST, ERROR_INCORRECT_ACTION } from "../utils/message";
import { MessageRequest, MessageResponse, ResponseType } from "../utils/type";
import { routerByBible } from "./bible_router";
import { routerByBook } from "./book_router";
import { routerByChapter } from "./chapter_router";
import { routerByLog } from "./log_router";

export async function router(data: string): Promise<MessageResponse> {
    if (data === "") {
        return { responseType: ResponseType.ERROR, message: ERROR_EMPTY_MESSAGE_REQUEST, body: null }
    }

    const message: MessageRequest = JSON.parse(data)
    if (!message || !message.action || message.action === "") {
        return { responseType: ResponseType.ERROR, message: ERROR_EMPTY_ACTION, body: null }
    }

    if (message.action.indexOf("/bible") === 0) {
        return await routerByBible(message)
    }

    if (message.action.indexOf("/book") === 0) {
        return await routerByBook(message)
    }

    if (message.action.indexOf("/chapter") === 0) {
        return await routerByChapter(message)
    }

    if (message.action.indexOf("/log") === 0) {
        return await routerByLog(message)
    }
    
    return { responseType: ResponseType.ERROR, message: ERROR_INCORRECT_ACTION, body: null }
}