import { appendLog, readLogs } from "../database/log_db";
import { Action, Log, RequestType } from "./log";

class LogModel {
    async saveErrorLog(type: RequestType, action: Action, body: any) {
        const log: Log = { type: type, action: action, params: null, body }
        this.saveLog(log)
    }

    async saveLog(log: Log) {
        appendLog(log)
    }

    async save(request: Log, response: Log) {
        appendLog(request)
        appendLog(response)
    }

    async getAll(): Promise<Log[]> {
        return readLogs()
    }
}

export const logModel = new LogModel()