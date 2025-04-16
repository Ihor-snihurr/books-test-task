import { BookStatus } from "../enums/books.enums";

export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  status: BookStatus;
}

export type CreateBookReqBody = Omit<Book, "id">;

export type UpdateBookReqBody = Partial<CreateBookReqBody>;
