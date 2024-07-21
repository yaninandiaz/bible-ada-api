import { getAll, getById } from "../external_api/bible_api";
import { ERROR_BAD_REQUEST, ERROR_MISSING_BIBLE_ID } from "../utils/message";
import { Bible } from "./bible";

class BibleModel {
    public async getAll(): Promise<Bible[]> {
        const biblesJson = await getAll();
        // console.info("[result] " + JSON.stringify(bible))
        return biblesJson.data;
    }

    public async getById(bibleId: string): Promise<Bible | string> {
        if (bibleId === "") {
            return ERROR_MISSING_BIBLE_ID
        }

        const bibleJson = await getById(bibleId)
        if (bibleJson?.error) {
            return ERROR_BAD_REQUEST + ". StatusCode: " + bibleJson?.statusCode + ". Error: " + bibleJson?.error + ". Message: " + bibleJson?.message
        }

        return bibleJson.data
    }
}

export const bibleModel = new BibleModel()

/*
const bible = new BibleModel();
bible.getAll()
*/