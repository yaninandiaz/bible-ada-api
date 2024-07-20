import { getAll, getById } from "../external_api/book_api";
import { Book } from "./book"

class BookModel {
    public async getAll(bibleId: string): Promise<Book[]> {
        const booksJson = await getAll(bibleId);
        // console.info("[resultado] " + JSON.stringify(bible))
        return booksJson.data;
    }

    public async getById(bibleId: string, bookId: string): Promise<Book | string> {
        const bookJson = await getById(bibleId, bookId)
        return bookJson.data
    }
}