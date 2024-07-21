import { bibleController } from "../controllers/bible_controller";
import { ERROR_INCORRECT_ACTION } from "../utils/message";
import { MessageRequest, MessageResponse, ResponseType } from "../utils/type";

export async function routerByBible(messageRequest: MessageRequest): Promise<MessageResponse> {
    if (messageRequest.action === "/bible/all") {
        return await bibleController.getAll()
    }

    if (messageRequest.action === "/bible/id") {
        return await bibleController.getById(messageRequest.body.bibleId)
    }

    return { responseType: ResponseType.ERROR, message: ERROR_INCORRECT_ACTION, body: null }
}