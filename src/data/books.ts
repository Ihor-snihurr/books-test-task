import { BookStatus } from "../enums/books.enums";
import { Book } from "../types/books.types";

const books: Book[] = [
  {
    id: "81c86c4f-eb41-4c36-87f9-4ec33dba2e54",
    title: "Title1",
    author: "Alex Michaelides",
    year: 2019,
    status: BookStatus.AVAILABLE,
  },
  {
    id: "92d3b1a0-5d8f-4e3c-b7e2-1f5a9c8b6d7e",
    title: "Title2",
    author: "Delia Owens",
    year: 2018,
    status: BookStatus.AVAILABLE,
  },
  {
    id: "a3e4f5g6-h7i8-j9k0-l1m2n3o4p5q6",
    title: "Title3",
    author: "Tara Westover",
    year: 2018,
    status: BookStatus.AVAILABLE,
  },
  {
    id: "b4c5d6e7-f8g9-h0i1-j2k3l4m5n6o7",
    title: "Title4",
    author: "Michelle Obama",
    year: 2018,
    status: BookStatus.FINISHED,
  },
  {
    id: "c5d6e7f8-g9h0-i1j2-k3l4m5n6o7p8",
    title: "Title5",
    author: "Margaret Atwood",
    year: 2019,
    status: BookStatus.FINISHED,
  },
  {
    id: "d6e7f8g9-h0i1-j2k3-l4m5n6o7p8q9",
    title: "Title6",
    author: "Sally Rooney",
    year: 2018,
    status: BookStatus.FINISHED,
  },
  {
    id: "e7f8g9h0-i1j2-k3l4-m5n6o7p8q9r0",
    title: "Title7",
    author: "Ann Patchett",
    year: 2019,
    status: BookStatus.READING,
  },
  {
    id: "f8g9h0i1-j2k3-l4m5-n6o7p8q9r0s1",
    title: "Title8",
    author: "Jojo Moyes",
    year: 2019,
    status: BookStatus.READING,
  },
  {
    id: "g9h0i1j2-k3l4-m5n6-o7p8q9r0s1t2",
    title: "Title9",
    author: "Celeste Ng",
    year: 2017,
    status: BookStatus.READING,
  },
  {
    id: "h0i1j2k3-l4m5-n6o7-p8q9r0s1t2u3",
    title: "Title10",
    author: "Ta-Nehisi Coates",
    year: 2019,
    status: BookStatus.READING,
  },
  {
    id: "i1j2k3l4-m5n6-o7p8-q9r0s1t2u3v4",
    title: "Title11",
    author: "Kiley Reid",
    year: 2019,
    status: BookStatus.READING,
  },
  {
    id: "j2k3l4m5-n6o7-p8q9-r0s1t2u3v4w5",
    title: "Title12",
    author: "Stephen King",
    year: 2019,
    status: BookStatus.READING,
  },
];

export default books;
