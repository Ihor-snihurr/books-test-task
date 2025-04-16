import { Request, Response, NextFunction } from "express";
import {
  booksGetQuerySchema,
  createBooksSchema,
  updateBooksSchema,
  booksUpdateQuerySchema,
  booksDeleteQuerySchema,
} from "../validators/books.validator";

export const validateBooksGetQuery = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validationResult = booksGetQuerySchema.validate(req.query);
  if (validationResult.error) {
    res.status(400);
    res.send({ errorMessage: validationResult.error });
  } else {
    next();
  }
};

export const validateBookCreate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validationResult = createBooksSchema.validate(req.body);
  if (validationResult.error) {
    res.status(400);
    res.send({ errorMessage: validationResult.error });
  } else {
    next();
  }
};

export const validateBookUpdate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validationResult = updateBooksSchema.validate(req.body);
  if (validationResult.error) {
    res.status(400);
    res.send({ errorMessage: validationResult.error });
  } else {
    next();
  }
};

export const validateBooksUpdateQuery = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validationResult = booksUpdateQuerySchema.validate(req.params);
  if (validationResult.error) {
    res.status(400);
    res.send({ errorMessage: validationResult.error });
  } else {
    next();
  }
};

export const validateBooksDeleteQuery = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validationResult = booksDeleteQuerySchema.validate(req.params);
  if (validationResult.error) {
    res.status(400);
    res.send({ errorMessage: validationResult.error });
  } else {
    next();
  }
};
