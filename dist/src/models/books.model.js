"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookModel = void 0;
const books_1 = __importDefault(require("../data/books"));
const uuid_1 = require("uuid");
exports.bookModel = {
    async create(book) {
        const id = (0, uuid_1.v4)();
        books_1.default.push({ id, ...book });
    },
    async read({ status, author, page = "1", limit = "20", }) {
        const pageInt = parseInt(page);
        const limitInt = parseInt(limit);
        const startIndex = (pageInt - 1) * limitInt;
        const endIndex = startIndex + limitInt;
        return books_1.default
            .filter((book) => {
            if (status && book.status !== status)
                return false;
            if (author && book.author !== author)
                return false;
            return true;
        })
            .slice(startIndex, endIndex);
    },
    async update(id, body) {
        const bookIndex = books_1.default.findIndex((book) => book.id === id);
        if (bookIndex === -1) {
            return false;
        }
        const updatedBook = {
            ...books_1.default[bookIndex],
            ...body,
            id,
        };
        books_1.default[bookIndex] = updatedBook;
        return updatedBook;
    },
    async delete(id) {
        const bookIndex = books_1.default.findIndex((book) => book.id === id);
        if (bookIndex === -1) {
            return false;
        }
        books_1.default.splice(bookIndex, 1);
        return true;
    },
};
