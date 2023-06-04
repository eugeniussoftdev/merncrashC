import dotenv from "dotenv";
import express from "express";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import { userRoutes } from "./routes/userRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(PORT, () => {
  console.log("*** Server running PORT", PORT);
});
