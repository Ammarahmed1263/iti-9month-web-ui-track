import express from "express";
import { createCategory, getCategories } from "../controllers/category.controller.js";
import { getProductsByCategory } from "../controllers/product.controller.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { restrictTo } from "../middlewares/restrictTo.middleware.js";
import { userRoles } from "../utils/userRoles.js";

const router = express.Router();

router.get("/", getCategories);

router.post("/", authenticate, restrictTo(userRoles.ADMIN), createCategory);

router.get("/:categoryId/products", getProductsByCategory);

export default router;