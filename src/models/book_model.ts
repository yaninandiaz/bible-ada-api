import { getAll, getById } from "../external_api/book_api";
import { ERROR_BAD_REQUEST, ERROR_MISSING_BIBLE_ID, ERROR_MISSING_BOOK_ID } from "../utils/message";
import { Book } from "./book"

class BookModel {
    public async getAll(bibleId: string): Promise<Book[] | string> {
        if (!bibleId) {
            return ERROR_MISSING_BIBLE_ID
        }

        const booksJson = await getAll(bibleId);
        // console.info("[resultado] " + JSON.stringify(bible))

        if (booksJson?.error) {
            return ERROR_BAD_REQUEST + ". StatusCode: " + booksJson?.statusCode + ". Error: " + booksJson?.error + ". Message: " + booksJson?.message
        }

        return booksJson.data;
    }

    public async getById(bibleId: string, bookId: string): Promise<Book | string> {
        if (!bibleId) {
            return ERROR_MISSING_BIBLE_ID
        }

        if (!bookId) {
            return ERROR_MISSING_BOOK_ID
        }

        const bookJson = await getById(bibleId, bookId)

        if (bookJson?.error) {
            return ERROR_BAD_REQUEST + ". StatusCode: " + bookJson?.statusCode + ". Error: " + bookJson?.error + ". Message: " + bookJson?.message
        }

        return bookJson.data
    }
}

export const bookModel = new BookModel()