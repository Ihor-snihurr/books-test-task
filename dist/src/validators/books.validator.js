"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksDeleteQuerySchema = exports.booksUpdateQuerySchema = exports.updateBooksSchema = exports.createBooksSchema = exports.booksGetQuerySchema = void 0;
const joi_1 = __importDefault(require("joi"));
const books_enums_1 = require("../enums/books.enums");
exports.booksGetQuerySchema = joi_1.default.object({
    status: joi_1.default.string().valid(...Object.values(books_enums_1.BookStatus)),
    author: joi_1.default.string(),
    page: joi_1.default.number().integer(),
    limit: joi_1.default.number().integer(),
});
exports.createBooksSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    author: joi_1.default.string().required(),
    year: joi_1.default.number().integer().required(),
    status: joi_1.default.string()
        .valid(...Object.values(books_enums_1.BookStatus))
        .required(),
}).required();
exports.updateBooksSchema = joi_1.default.object({
    title: joi_1.default.string(),
    author: joi_1.default.string(),
    year: joi_1.default.number().integer(),
    status: joi_1.default.string().valid(...Object.values(books_enums_1.BookStatus)),
})
    .min(1)
    .required();
exports.booksUpdateQuerySchema = joi_1.default.object({
    id: joi_1.default.string().required().uuid(),
});
exports.booksDeleteQuerySchema = joi_1.default.object({
    id: joi_1.default.string().required().uuid(),
});
