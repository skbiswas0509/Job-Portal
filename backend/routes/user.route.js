import express from "express"
import { login, logout, register, updateProfile } from "../controllers/user.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router()

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/prfile/update").post(isAuthenticated, updateProfile);
router.route("/lougout").get(logout)

export default router;