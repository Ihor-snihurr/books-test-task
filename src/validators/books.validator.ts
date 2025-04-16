import Joi from "joi";
import { BookStatus } from "../enums/books.enums";

export const booksGetQuerySchema = Joi.object({
  status: Joi.string().valid(...Object.values(BookStatus)),
  author: Joi.string(),
  page: Joi.number().integer(),
  limit: Joi.number().integer(),
});

export const createBooksSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  year: Joi.number().integer().required(),
  status: Joi.string()
    .valid(...Object.values(BookStatus))
    .required(),
}).required();

export const updateBooksSchema = Joi.object({
  title: Joi.string(),
  author: Joi.string(),
  year: Joi.number().integer(),
  status: Joi.string().valid(...Object.values(BookStatus)),
})
  .min(1)
  .required();

export const booksUpdateQuerySchema = Joi.object({
  id: Joi.string().required().uuid(),
});

export const booksDeleteQuerySchema = Joi.object({
  id: Joi.string().required().uuid(),
});
