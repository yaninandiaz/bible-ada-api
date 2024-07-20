import { chapterModel } from "../models/chapter_model";

class ChapterController {
    async getAll(bibleId: string, bookId: string) {
        return chapterModel.getAll(bibleId, bookId)
    }
}

export const chapterController = new ChapterController()