import morgan from "morgan";
import express, { Express } from "express";

const morganMiddleware: Express = express();

morganMiddleware.use(morgan("tiny"));

export default morganMiddleware;
