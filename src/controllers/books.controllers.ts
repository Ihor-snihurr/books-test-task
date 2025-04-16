import { Request, Response } from "express";
import { bookService } from "../services/books.service";

export const getBooks = async (req: Request, res: Response) => {
  const { status, author, page, limit } = req.query;
  const filters = {
    status: status as string | undefined,
    author: author as string | undefined,
    page: page as string | undefined,
    limit: limit as string | undefined,
  };

  const books = await bookService.getBooks(filters);

  res.send({ content: books });
};

export const createNewBook = async (req: Request, res: Response) => {
  await bookService.createBook(req.body);

  res.sendStatus(201);
};

export const updateBook = async (req: Request, res: Response) => {
  const id = req.params.id;

  const updateResult = await bookService.updateBook(id, req.body);

  if (updateResult) {
    res.send(updateResult);
  } else {
    res.sendStatus(404);
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  const id = req.params.id;

  const deleteResult = await bookService.deleteBook(id);

  if (deleteResult) {
    res.send(deleteResult);
  } else {
    res.sendStatus(404);
  }
};
