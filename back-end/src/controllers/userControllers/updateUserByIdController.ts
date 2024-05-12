import { Response, Request } from "express";

export default function updateUserByIdController(req: Request, res: Response) {
  res.send("update user by id: " + req.params.userId).status(200);
}
