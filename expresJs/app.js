import userRoutes from "./routes/userRoutes.js";
// import productRoutes from "./routes/productRouts.js";
import express from "express";
const app = express();

app.use(express.json());
// app.use("/", productRoutes);

app.use("/", userRoutes);

export default app;
