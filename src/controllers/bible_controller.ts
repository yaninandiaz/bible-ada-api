import { bibleModel } from "../models/bible_model";

class BibleController {
    async getAll() {
       return await bibleModel.getAll()
    }

    async getById(bibleId: string | undefined | null) {
        if (!bibleId) {
            return "ERROR"
        }
        return await bibleModel.getById(bibleId)
    }
}

export const bibleController = new BibleController()

