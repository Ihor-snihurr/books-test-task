"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookService = void 0;
const books_model_1 = require("../models/books.model");
exports.bookService = {
    async createBook(book) {
        books_model_1.bookModel.create(book);
    },
    async getBooks(filters) {
        return books_model_1.bookModel.read(filters);
    },
    async updateBook(id, body) {
        return books_model_1.bookModel.update(id, body);
    },
    async deleteBook(id) {
        return books_model_1.bookModel.delete(id);
    },
};
