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

router.use(loggerMiddleware);

router.get("/", validateBooksGetQuery, getBooks);
router.post("/", validateBookCreate, createNewBook);
router.put("/:id", validateBookUpdate, validateBooksUpdateQuery, updateBook);
router.delete("/:id", validateBooksDeleteQuery, deleteBook);

export default router;
