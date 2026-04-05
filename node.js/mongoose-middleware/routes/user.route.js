import express from "express";
import { getUsers, login, register } from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { restrictTo } from "../middlewares/restrictTo.middleware.js";
import { userRoles } from "../utils/userRoles.js";

const router = express.Router();

router.get("/", authenticate, restrictTo(userRoles.MANAGER, userRoles.ADMIN), getUsers);
router.post("/login", login);
router.post("/register", register);

export default router;
