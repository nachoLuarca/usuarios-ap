import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js"; // ✅ importa rutas

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ✅ conecta las rutas
app.use("/api/productos", productRoutes);

const PORT = process.env.PORT || 4002;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB conectado (productos)"))
  .catch((err) => console.error("Error al conectar Mongo:", err));

app.listen(PORT, () => {
  console.log(`Microservicio de productos escuchando en puerto ${PORT}`);
});
