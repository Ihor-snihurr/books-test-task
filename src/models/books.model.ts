import books from "../data/books";
import { CreateBookReqBody, UpdateBookReqBody } from "../types/books.types";
import { v4 } from "uuid";

export const bookModel = {
  async create(book: CreateBookReqBody) {
    const id = v4();

    books.push({ id, ...book });
  },
  async read({
    status,
    author,
    page = "1",
    limit = "20",
  }: {
    status?: string;
    author?: string;
    page?: string;
    limit?: string;
  }) {
    const pageInt = parseInt(page);
    const limitInt = parseInt(limit);

    const startIndex = (pageInt - 1) * limitInt;
    const endIndex = startIndex + limitInt;

    return books
      .filter((book) => {
        if (status && book.status !== status) return false;
        if (author && book.author !== author) return false;
        return true;
      })
      .slice(startIndex, endIndex);
  },
  async update(id: string, body: UpdateBookReqBody) {
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
      return false;
    }

    const updatedBook = {
      ...books[bookIndex],
      ...body,
      id,
    };

    books[bookIndex] = updatedBook;
    return updatedBook;
  },
  async delete(id: string) {
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
      return false;
    }

    books.splice(bookIndex, 1);
    return true;
  },
};
