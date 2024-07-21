import { chapterController } from "../controllers/chapter_controller";
import { ERROR_INCORRECT_ACTION } from "../utils/message";
import { MessageRequest, MessageResponse, ResponseType } from "../utils/type";

export async function routerByChapter(messageRequest: MessageRequest): Promise<MessageResponse> {
    if (messageRequest.action === "/chapter/all") {
        return await chapterController.getAll(messageRequest?.body?.bibleId, messageRequest?.body?.bookId)
    }

    return { responseType: ResponseType.ERROR, message: ERROR_INCORRECT_ACTION, body: null }
}