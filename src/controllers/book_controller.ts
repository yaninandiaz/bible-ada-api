import { Book } from "../models/book";
import { bookModel } from "../models/book_model";
import { Action, Log, RequestType } from "../models/log";
import { logModel } from "../models/log_model";
import { ERROR_MISSING_PARAM } from "../utils/message";
import { MessageResponse, ResponseType } from "../utils/type";

class BookController {
    async getAll(bibleId: string | null | undefined): Promise<MessageResponse> {
        const type: RequestType = RequestType.BOOK_GET_ALL

        const requestLog: Log = { type, action: Action.REQUEST, params: { bibleId }, body: null }
        if (!bibleId) {
            const errorResponse: MessageResponse = { responseType: ResponseType.ERROR, message: ERROR_MISSING_PARAM, body: null }
            const responseLog: Log = { type, action: Action.RESPONSE, params: null, body: errorResponse }
            // it is not going to wait (await) because I do not want it to be blocking
            logModel.save(requestLog, responseLog)

            return errorResponse
        }

        const result: Book[] | string = await bookModel.getAll(bibleId)
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

    async getById(bibleId: string | null | undefined, bookId: string | null | undefined): Promise<MessageResponse> {
        const type: RequestType = RequestType.BOOK_GET_BY_ID

        const requestLog: Log = { type, action: Action.REQUEST, params: { bibleId, bookId }, body: null }
        if (!bibleId || !bookId) {
            const errorResponse: MessageResponse = { responseType: ResponseType.ERROR, message: ERROR_MISSING_PARAM, body: null }
            const responseLog: Log = { type, action: Action.RESPONSE, params: null, body: errorResponse }
            // it is not going to wait (await) because I do not want it to be blocking
            logModel.save(requestLog, responseLog)

            return errorResponse
        }

        const result: Book | string = await bookModel.getById(bibleId, bookId)
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

export const bookController = new BookController()