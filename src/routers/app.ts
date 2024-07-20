import { ERROR_EMPTY_ACTION, ERROR_EMPTY_MESSAGE_REQUEST, ERROR_INCORRECT_ACTION } from "../utils/message";
import { MessageRequest } from "../utils/message_request_type";
import { routerByBible } from "./bible_router";
import { routerByBook } from "./book_router";
import { routerByChapter } from "./chapter_router";

export async function router(data: string) {
    if (data === "") {
        return ERROR_EMPTY_MESSAGE_REQUEST
    }

    const message: MessageRequest = JSON.parse(data)
    if (!message || message.action === "") {
        return ERROR_EMPTY_ACTION
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

    return ERROR_INCORRECT_ACTION
}