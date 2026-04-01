import express from "express";
import { createCategory, getCategories } from "../controllers/category.controller.js";
import { getProductsByCategory } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getCategories);

router.post("/", createCategory);

router.get("/:categoryId/products", getProductsByCategory);

export default router;