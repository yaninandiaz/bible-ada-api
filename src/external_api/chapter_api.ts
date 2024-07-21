import { API_KEY } from "../utils/api_key";
import { CHAPTER_URL_ALL } from "../utils/url";
import { sprintf } from 'sprintf-js';

async function getAll(bibleId: string, bookId: string): Promise<any> {
    const url = sprintf(CHAPTER_URL_ALL, bibleId, bookId)
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "accept": "application/json",
            "api-key": API_KEY,
        }
    });
    const data = await response.json()
    // console.log(data);
    return data
}

export { getAll }

// getAll("592420522e16049f-01", "HEB")