import { Router } from "express";

import getUserByidController from "../controllers/userControllers/getUserByIdController.js";
import createUserController from "../controllers/userControllers/createUserController.js";
import updateUserByIdController from "../controllers/userControllers/updateUserByIdController.js";

const userRoutes: Router = Router();

userRoutes.post("/user", createUserController);

userRoutes.get("/user/:userId", getUserByidController);

userRoutes.patch("/user/:userId", updateUserByIdController);

export default userRoutes;
