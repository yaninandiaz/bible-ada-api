import { getAll, getById } from "../external_api/bible_api";
import { Bible } from "./bible";

class BibleModel {
    public async getAll(): Promise<Bible[]> {
        const biblesJson = await getAll();
        // console.info("[result] " + JSON.stringify(bible))
        return biblesJson.data;
    }

    public async getById(bibleId: string): Promise<Bible | string> {
        const bibleJson=await getById(bibleId)
        return bibleJson.data
    }
}

export const bibleModel = new BibleModel()

/*
const bible = new BibleModel();
bible.getAll()
*/