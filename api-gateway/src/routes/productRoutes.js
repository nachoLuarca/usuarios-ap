import { Router } from "express";
import { productService } from "../services/productService.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const r = await productService.get("/products");
    res.json(r.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const r = await productService.get(`/products/${req.params.id}`);
    res.json(r.data);
  } catch (err) {
    res.status(err.Response?.status || 500).json(err.response?.data || { error: err.message });
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    const r = await productService.post("/products", req.body);
    res.status(r.status).json(r.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: err.message });
  }
});

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const r = await productService.delete(`/products/${req.params.id}`);
    res.status(r.status).json(r.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: err.message });
  }
});

export default router;
