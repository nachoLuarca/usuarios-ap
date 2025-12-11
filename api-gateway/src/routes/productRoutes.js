import { Router } from "express";
import { productService } from "../services/productService.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = Router();

// Todas las rutas acá requieren JWT
router.use(verifyToken);

// Listar productos
router.get("/", async (req, res) => {
    try {
        const result = await productService.get("/");
        res.json(result.data);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" });
    }
});

// Crear producto
router.post("/", async (req, res) => {
    try {
        const result = await productService.post("/", req.body);
        res.json(result.data);
    } catch (error) {
        res.status(500).json({ error: "Error al crear producto" });
    }
});

export default router;
