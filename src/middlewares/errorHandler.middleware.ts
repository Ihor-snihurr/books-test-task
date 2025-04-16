import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).send({ error: "Internal Server Error" });
};
