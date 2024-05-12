import express, { Router } from "express";
import getHealthCheckController from "../controllers/healthCheckController/getHealthCheckController.js";

const healthCheckRoutes: Router = express.Router();

healthCheckRoutes.get("/healthCheck", getHealthCheckController);

export default healthCheckRoutes;
