import { Log } from "../models/log"
import { logModel } from "../models/log_model"
import { MessageResponse, ResponseType } from "../utils/type"

class LogController {
    async getAll(): Promise<MessageResponse> {
        // For this request, I don't save logs
        const result: Log[] = await logModel.getAll()
        
        const response: MessageResponse = { responseType: ResponseType.SUCCESS, message: null, body: result }
        return response
    }
}

export const logController = new LogController()