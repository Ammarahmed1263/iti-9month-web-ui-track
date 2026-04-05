import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { restrictTo } from "../middlewares/restrictTo.middleware.js";
import { userRoles } from "../utils/userRoles.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post(
  "/",
  authenticate,
  restrictTo(userRoles.MANAGER, userRoles.ADMIN),
  createProduct,
);

router.put(
  "/:id",
  authenticate,
  restrictTo(userRoles.MANAGER, userRoles.ADMIN),
  replaceProduct,
);

router.patch(
  "/:id",
  authenticate,
  restrictTo(userRoles.MANAGER, userRoles.ADMIN),
  updateProduct,
);

router.delete("/:id", authenticate, restrictTo(userRoles.ADMIN), deleteProduct);

export default router;
