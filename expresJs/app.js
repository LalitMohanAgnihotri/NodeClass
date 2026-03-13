import userRoutes from "./routes/userRoutes.js";
import express from "express";
const app = express();

app.use(express.json());

app.use("/", userRoutes);

export default app;
