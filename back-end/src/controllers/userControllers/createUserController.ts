import { Request, Response } from "express";

export default function createUserController(req: Request, res: Response) {
  res.send("create user").status(200);
}
