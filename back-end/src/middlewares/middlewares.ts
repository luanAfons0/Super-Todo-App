import express, { Express } from "express";
import morganMiddleware from "./morganMiddleware.js";

const middlewares: Express = express();

middlewares.use(morganMiddleware);

export default middlewares;
