const BIBLE_BASE_URL: string = "https://api.scripture.api.bible/v1/bibles"

export const BIBLE_URL_ALL: string = BIBLE_BASE_URL + "?language=spa"

export const BIBLE_URL_BY_ID: string = `${BIBLE_BASE_URL}/%s`

export const BOOK_URL_BY_BIBLE: string = `${BIBLE_BASE_URL}/%s/books`

export const BOOK_URL_BY_ID: string = `${BIBLE_BASE_URL}/%s/books/%s`

export const CHAPTER_URL_ALL: string = `${BIBLE_BASE_URL}/%s/books/%s/chapters`
