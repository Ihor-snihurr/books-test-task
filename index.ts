import express from "express";
import booksRoute from "./src/routes/books.route";
import { errorHandlerMiddleware } from "./src/middlewares/errorHandler.middleware";
const app = express();
const port = 3000;

app.use(express.json());
app.use(errorHandlerMiddleware);

app.use("/books", booksRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export default app;
