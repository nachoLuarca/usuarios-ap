import { Router } from "express";
import { authService } from "../services/authService.js";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const r = await authService.post("/auth/register", req.body);
    res.status(r.status).json(r.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const r = await authService.post("/auth/login", req.body);
    res.status(r.status).json(r.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: err.message });
  }
});

export default router;
