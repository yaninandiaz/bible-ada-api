import { API_KEY } from "../utils/api_key";
import { BIBLE_URL_ALL, BIBLE_URL_BY_ID } from "../utils/url";
import { sprintf } from 'sprintf-js';

async function getAll(): Promise<any> {
    const response = await fetch(BIBLE_URL_ALL, {
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

async function getById(bibleId: string): Promise<any> {
    const url = sprintf(BIBLE_URL_BY_ID, bibleId)
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "accept": "application/json",
            "api-key": API_KEY,
        }
    });
    const data = await response.json()
    console.log(data);
    return data
}

export { getAll, getById }

// getAll();

// getById("592420522e16049f-01")