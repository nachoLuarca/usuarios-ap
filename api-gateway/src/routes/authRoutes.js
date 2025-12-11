import { Router } from "express";
import { authService } from "../services/authService.js";

const router = Router();

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const result = await authService.post("/login", req.body);
        res.json(result.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data);
    }
});

// REGISTRO
router.post("/register", async (req, res) => {
    try {
        const result = await authService.post("/register", req.body);
        res.json(result.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data);
    }
});

export default router;
