import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config.js";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Rutas principales
app.use("/auth", authRoutes);
app.use("/products", productRoutes);

// Health Check
app.get("/", (req, res) => {
    res.json({ status: "API Gateway funcionando correctamente" });
});

app.listen(config.PORT, () =>
    console.log(`🚀 API Gateway escuchando en puerto ${config.PORT}`)
);
