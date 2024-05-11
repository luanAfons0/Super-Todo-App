import { Request, Response } from "express";

export default function GetHealthCheckController(req: Request, res: Response) {
  res.send({ message: "API is up and running!!!" }).status(200);
}
