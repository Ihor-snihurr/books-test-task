"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../index"));
const books_1 = __importDefault(require("../../src/data/books"));
describe("book GET route", () => {
    test("should return 12 books", async () => {
        const res = await (0, supertest_1.default)(index_1.default).get("/books");
        expect(res.statusCode).toEqual(200);
        expect(res.body.content).toBeTruthy();
        expect(res.body.content.length).toBe(books_1.default.length);
    });
});
