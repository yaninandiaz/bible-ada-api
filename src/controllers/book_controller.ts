import { bookModel } from "../models/book_model";

class BookController {
    async getAll(bibleId: string) {
        return await bookModel.getAll(bibleId)
    }

    async getById(bibleId: string, bookId: string) {
        return await bookModel.getById(bibleId, bookId)
    }
}

export const bookController = new BookController()