import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} from "./controllers/product.controller.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/products", getAllProducts);

app.get("/products/:id", getProductById);

app.post("/products", createProduct);

app.put("/products/:id", replaceProduct);

app.patch("/products/:id", updateProduct);

app.delete("/products/:id", deleteProduct);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
