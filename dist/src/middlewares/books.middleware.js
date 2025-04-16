"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBooksDeleteQuery = exports.validateBooksUpdateQuery = exports.validateBookUpdate = exports.validateBookCreate = exports.validateBooksGetQuery = void 0;
const books_validator_1 = require("../validators/books.validator");
const validateBooksGetQuery = (req, res, next) => {
    const validationResult = books_validator_1.booksGetQuerySchema.validate(req.query);
    if (validationResult.error) {
        res.status(400);
        res.send({ errorMessage: validationResult.error });
    }
    else {
        next();
    }
};
exports.validateBooksGetQuery = validateBooksGetQuery;
const validateBookCreate = (req, res, next) => {
    const validationResult = books_validator_1.createBooksSchema.validate(req.body);
    if (validationResult.error) {
        res.status(400);
        res.send({ errorMessage: validationResult.error });
    }
    else {
        next();
    }
};
exports.validateBookCreate = validateBookCreate;
const validateBookUpdate = (req, res, next) => {
    const validationResult = books_validator_1.updateBooksSchema.validate(req.body);
    if (validationResult.error) {
        res.status(400);
        res.send({ errorMessage: validationResult.error });
    }
    else {
        next();
    }
};
exports.validateBookUpdate = validateBookUpdate;
const validateBooksUpdateQuery = (req, res, next) => {
    const validationResult = books_validator_1.booksUpdateQuerySchema.validate(req.params);
    if (validationResult.error) {
        res.status(400);
        res.send({ errorMessage: validationResult.error });
    }
    else {
        next();
    }
};
exports.validateBooksUpdateQuery = validateBooksUpdateQuery;
const validateBooksDeleteQuery = (req, res, next) => {
    const validationResult = books_validator_1.booksDeleteQuerySchema.validate(req.params);
    if (validationResult.error) {
        res.status(400);
        res.send({ errorMessage: validationResult.error });
    }
    else {
        next();
    }
};
exports.validateBooksDeleteQuery = validateBooksDeleteQuery;
