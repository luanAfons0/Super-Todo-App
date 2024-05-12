import express, { Express } from "express";

import healthCheckRoutes from "./healthCheckRoute.js";
import userRoutes from "./userRoutes.js";

const routes: Express = express();

routes.use(healthCheckRoutes);
routes.use(userRoutes);

export default routes;
