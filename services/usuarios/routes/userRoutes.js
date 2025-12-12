import express from "express";
import { register, login } from "../controllers/authController.js";
import { auth } from "../middlewares/auth.js";
import { perfil } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", auth, perfil);

export default router;
