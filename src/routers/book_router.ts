import { bookController } from "../controllers/book_controller";
import { ERROR_INCORRECT_ACTION } from "../utils/message";
import { MessageRequest } from "../utils/message_request_type";

export async function routerByBook(messageRequest: MessageRequest) {
    if (messageRequest.action === "/book/all") {
        return await bookController.getAll(messageRequest.body.bibleId)
    }

    if (messageRequest.action === "/book/id") {
        return await bookController.getById(messageRequest.body.bibleId, messageRequest.body.bookId)
    }

    return ERROR_INCORRECT_ACTION
}