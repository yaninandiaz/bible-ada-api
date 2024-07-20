import { chapterController } from "../controllers/chapter_controller";
import { ERROR_INCORRECT_ACTION } from "../utils/message";
import { MessageRequest } from "../utils/message_request_type";

export async function routerByChapter(messageRequest: MessageRequest) {
    if (messageRequest.action === "/chapter/all") {
        return await chapterController.getAll(messageRequest.body.bibleId, messageRequest.body.bookId)
    }

    return ERROR_INCORRECT_ACTION
}