import { Bible } from "../models/bible";
import { bibleModel } from "../models/bible_model";
import { Action, Log, RequestType } from "../models/log";
import { logModel } from "../models/log_model";
import { ERROR_MISSING_PARAM } from "../utils/message";
import { MessageResponse, ResponseType } from "../utils/type";

class BibleController {
    async getAll(): Promise<MessageResponse> {
        const result: Bible[] = await bibleModel.getAll()

        const response: MessageResponse = { responseType: ResponseType.SUCCESS, message: null, body: result }

        // Logs
        const requestLog: Log = { type: RequestType.BIBLE_GET_ALL, action: Action.REQUEST, params: null, body: null }
        const responseLog: Log = { type: RequestType.BIBLE_GET_ALL, action: Action.RESPONSE, params: null, body: response }
        // it is not going to wait (await) because I do not want it to be blocking
        logModel.save(requestLog, responseLog)

        return response
    }

    async getById(bibleId: string | undefined | null): Promise<MessageResponse> {
        const type: RequestType = RequestType.BIBLE_GET_BY_ID
        const requestLog: Log = { type, action: Action.REQUEST, params: { bibleId }, body: null }
        if (!bibleId) {
            const errorResponse: MessageResponse = { responseType: ResponseType.ERROR, message: ERROR_MISSING_PARAM, body: null }
            const responseLog: Log = { type, action: Action.RESPONSE, params: null, body: errorResponse }
            // it is not going to wait (await) because I do not want it to be blocking
            logModel.save(requestLog, responseLog)

            return errorResponse
        }

        const result: Bible | string = await bibleModel.getById(bibleId)
        if (typeof result === "string") {
            const errorResponse: MessageResponse = { responseType: ResponseType.ERROR, message: result, body: null }
            const responseLog: Log = { type, action: Action.RESPONSE, params: null, body: errorResponse }
            // it is not going to wait (await) because I do not want it to be blocking
            logModel.save(requestLog, responseLog)

            return errorResponse
        }

        const response: MessageResponse = { responseType: ResponseType.SUCCESS, message: null, body: result }
        const responseLog: Log = { type, action: Action.RESPONSE, params: null, body: response }
        // it is not going to wait (await) because I do not want it to be blocking
        logModel.save(requestLog, responseLog)

        return response
    }
}

export const bibleController = new BibleController()

