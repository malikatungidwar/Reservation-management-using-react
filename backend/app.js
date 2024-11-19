import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorMiddleware } from "./error/error.js";
import { dbConnection } from "./database/dbConnection.js";
import reservationRouter from "./routes/reservationRoute.js";
import signup1Router from "./routes/signup1Route.js";

const app = express();

dotenv.config({ path: "./config/config.env" });
app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["POST"],
      credentials: true,
    })
  );
app.use(express.json());
app.use("/api/v1/reservation", reservationRouter);
app.use(express.urlencoded({ extended: true }));
dbConnection();
app.use(express.json());
app.use("/api/v1/signup1", signup1Router);
app.use(express.urlencoded({ extended: true }));
dbConnection();

app.use(errorMiddleware);


export default app;
