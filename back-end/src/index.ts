import express, { Express } from "express";
import routes from "./routes/routes.js";

const app: Express = express();

app.use("/api", routes);

app.listen(5000, () => {
  console.log("API is up running!");
});
