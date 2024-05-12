import express, { Express } from "express";
import routes from "./routes/routes.js";
import middlewares from "./middlewares/middlewares.js";

const app: Express = express();

app.use(middlewares);
app.use("/api", routes);

app.listen(5000, () => {
  console.log("API is up running!");
});
