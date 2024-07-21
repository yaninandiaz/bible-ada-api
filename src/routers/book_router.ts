import { bookController } from "../controllers/book_controller";
import { ERROR_INCORRECT_ACTION } from "../utils/message";
import { MessageRequest, MessageResponse, ResponseType } from "../utils/type";

export async function routerByBook(messageRequest: MessageRequest): Promise<MessageResponse> {
    if (messageRequest.action === "/book/all") {
        return await bookController.getAll(messageRequest?.body?.bibleId)
    }

    if (messageRequest.action === "/book/id") {
        return await bookController.getById(messageRequest?.body?.bibleId, messageRequest?.body?.bookId)
    }

    return { responseType: ResponseType.ERROR, message: ERROR_INCORRECT_ACTION, body: null }
}