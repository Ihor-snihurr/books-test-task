import request from "supertest";
import app from "../../index";
import books from "../../src/data/books";

describe("book GET route", () => {
  test("should return 12 books", async () => {
    const res = await request(app).get("/books");
    expect(res.statusCode).toEqual(200);
    expect(res.body.content).toBeTruthy();
    expect(res.body.content.length).toBe(books.length);
  });
});
