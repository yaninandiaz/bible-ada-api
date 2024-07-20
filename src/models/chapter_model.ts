import { getAll } from "../external_api/chapter_api";
import { Chapter } from "./chapter"

class ChapterModel {
    public async getAll(bibleId: string, bookId: string): Promise<Chapter[]> {
        const chaptersJson = await getAll(bibleId, bookId);
        // console.info("[resultado] " + JSON.stringify(bible))
        return chaptersJson.data;
    }
}

export const chapterModel = new ChapterModel()