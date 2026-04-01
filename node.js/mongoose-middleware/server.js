import express from "express";
import mongoose from "mongoose";
import productRouter from './routes/products.route.js'
import categoryRouter from './routes/categories.route.js'
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/categories', categoryRouter);

app.use(errorHandler);

const startServer = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/products_db");
    console.log("connected to MongoDB");

    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("connection failed:", error.message);
    process.exit(1);
  }
};

startServer();
