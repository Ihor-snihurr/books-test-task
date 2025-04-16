import { bookModel } from "../models/books.model";
import { CreateBookReqBody, UpdateBookReqBody } from "../types/books.types";

export const bookService = {
  async createBook(book: CreateBookReqBody) {
    bookModel.create(book);
  },
  async getBooks(filters: {
    status?: string;
    author?: string;
    page?: string;
    limit?: string;
  }) {
    return bookModel.read(filters);
  },
  async updateBook(id: string, body: UpdateBookReqBody) {
    return bookModel.update(id, body);
  },
  async deleteBook(id: string) {
    return bookModel.delete(id);
  },
};
