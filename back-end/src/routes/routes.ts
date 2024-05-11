import express, { Express } from "express";

import healthCheckRoutes from "./healthCheckRoute.js";

const routes: Express = express();

routes.use(healthCheckRoutes);

export default routes;
