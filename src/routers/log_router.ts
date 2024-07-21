import { logController } from "../controllers/log_controller";
import { ERROR_INCORRECT_ACTION } from "../utils/message";
import { MessageRequest, MessageResponse, ResponseType } from "../utils/type";

export async function routerByLog(messageRequest: MessageRequest): Promise<MessageResponse> {
    if (messageRequest.action === "/log/all") {
        return await logController.getAll()
    }

    return { responseType: ResponseType.ERROR, message: ERROR_INCORRECT_ACTION, body: null }
}