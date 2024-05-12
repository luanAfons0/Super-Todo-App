import { Request, Response } from "express";

export default function getUserByidController(req: Request, res: Response) {
  res.send("get user infos by id: " + req.params.userId).status(200);
}
