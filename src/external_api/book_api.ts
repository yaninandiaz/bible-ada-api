import { API_KEY } from "../utils/api_key";
import { BOOK_URL_BY_BIBLE, BOOK_URL_BY_ID } from "../utils/url";
import { sprintf } from 'sprintf-js';

async function getAll(bibleId: string): Promise<any> {
    const url = sprintf(BOOK_URL_BY_BIBLE, bibleId)
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

async function getById(bibleId: string, bookId: string): Promise<any> {
    const url = sprintf(BOOK_URL_BY_ID, bibleId, bookId)
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

export { getAll, getById }

//getAll("592420522e16049f-01")

// getById("592420522e16049f-01", "HEB")