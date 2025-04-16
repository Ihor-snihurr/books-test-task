"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createNewBook = exports.getBooks = void 0;
const books_service_1 = require("../services/books.service");
const getBooks = async (req, res) => {
    const { status, author, page, limit } = req.query;
    const filters = {
        status: status,
        author: author,
        page: page,
        limit: limit,
    };
    const books = await books_service_1.bookService.getBooks(filters);
    res.send({ content: books });
};
exports.getBooks = getBooks;
const createNewBook = async (req, res) => {
    await books_service_1.bookService.createBook(req.body);
    res.sendStatus(201);
};
exports.createNewBook = createNewBook;
const updateBook = async (req, res) => {
    const id = req.params.id;
    const updateResult = await books_service_1.bookService.updateBook(id, req.body);
    if (updateResult) {
        res.send(updateResult);
    }
    else {
        res.sendStatus(404);
    }
};
exports.updateBook = updateBook;
const deleteBook = async (req, res) => {
    const id = req.params.id;
    const deleteResult = await books_service_1.bookService.deleteBook(id);
    if (deleteResult) {
        res.send(deleteResult);
    }
    else {
        res.sendStatus(404);
    }
};
exports.deleteBook = deleteBook;
