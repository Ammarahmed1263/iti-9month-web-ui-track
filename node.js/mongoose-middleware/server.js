import express from "express";
import mongoose from "mongoose";
import productRouter from "./routes/products.route.js";
import categoryRouter from "./routes/categories.route.js";
import errorHandler from "./middlewares/error.middleware.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use(express.json());

app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/users", userRouter);

app.use((req, res) => {
  return res.status(404).json({ status: "fail", message: "Route not found" });
});

app.use(errorHandler);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to MongoDB");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("connection failed:", error.message);
    process.exit(1);
  }
};

startServer();
