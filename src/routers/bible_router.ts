import { bibleController } from "../controllers/bible_controller";
import { ERROR_INCORRECT_ACTION } from "../utils/message";
import { MessageRequest } from "../utils/message_request_type";

export async function routerByBible(messageRequest: MessageRequest) {
    if (messageRequest.action === "/bible/all") {
        return await bibleController.getAll()
    }

    if (messageRequest.action === "/bible/id") {
        return await bibleController.getById(messageRequest.body.bibleId)
    }

    return ERROR_INCORRECT_ACTION
}