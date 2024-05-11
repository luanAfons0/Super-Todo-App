import express, { Router } from "express";
import getHealthCheckController from "../controllers/healthCheck/getHealthCheckController.js";

const healthCheckRoutes: Router = express.Router();

healthCheckRoutes.get("/healthCheck", getHealthCheckController);

export default healthCheckRoutes;
