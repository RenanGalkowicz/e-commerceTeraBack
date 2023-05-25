import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

app.use(express.json());

import db from "./config/database.js";
db.connect();

import clothesRoutes from "./routes/clothesRoutes.js";
import userRoutes from "./routes/userRoutes.js";

app.use("/clothes", clothesRoutes);
app.use("/users", userRoutes);

export default app;