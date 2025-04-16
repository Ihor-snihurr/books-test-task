"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_route_1 = __importDefault(require("./src/routes/books.route"));
const errorHandler_middleware_1 = require("./src/middlewares/errorHandler.middleware");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(errorHandler_middleware_1.errorHandlerMiddleware);
app.use("/books", books_route_1.default);
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
exports.default = app;
