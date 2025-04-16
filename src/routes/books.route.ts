import { Router, Request, Response } from "express";
import {
  createNewBook,
  deleteBook,
  getBooks,
  updateBook,
} from "../controllers/books.controllers";
import { loggerMiddleware } from "../middlewares/logger.middleware";
import {
  validateBookCreate,
  validateBooksDeleteQuery,
  validateBooksGetQuery,
  validateBooksUpdateQuery,
  validateBookUpdate,
} from "../middlewares/books.middleware";

const router = Router();

router.get("/", loggerMiddleware, validateBooksGetQuery, getBooks);
router.post("/", loggerMiddleware, validateBookCreate, createNewBook);
router.put(
  "/:id",
  loggerMiddleware,
  validateBookUpdate,
  validateBooksUpdateQuery,
  updateBook
);
router.delete("/:id", loggerMiddleware, validateBooksDeleteQuery, deleteBook);

export default router;
