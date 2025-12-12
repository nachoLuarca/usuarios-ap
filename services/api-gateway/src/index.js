import express from "express";
import dotenv from "dotenv";
import usuariosRoutes from "./routes/userRoutes.js";
import productosRoutes from "./routes/productProxy.js";

dotenv.config();

const app = express();
app.use(express.json());

// Rutas de microservicios
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/productos", productosRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API Gateway escuchando en puerto ${PORT}`);
});
