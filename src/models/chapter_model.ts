import { getAll } from "../external_api/chapter_api";
import { ERROR_MISSING_BIBLE_ID, ERROR_MISSING_BOOK_ID } from "../utils/message";
import { Chapter } from "./chapter"

class ChapterModel {
    public async getAll(bibleId: string, bookId: string): Promise<Chapter[] | string> {
        if (!bibleId) {
            return ERROR_MISSING_BIBLE_ID
        }

        if (!bookId) {
            return ERROR_MISSING_BOOK_ID
        }

        const chaptersJson = await getAll(bibleId, bookId);
        // console.info("[resultado] " + JSON.stringify(bible))
        return chaptersJson.data;
    }
}

export const chapterModel = new ChapterModel()