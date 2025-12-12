import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import usuariosRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

// Aquí usas la ruta correcta
app.use("/api/usuarios", usuariosRoutes);

app.get("/", (req, res) => {
  res.send("Servicio de usuarios funcionando");
});

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Error mongo:", err));

app.listen(4001, () => console.log("Microservicio usuarios en puerto 4001"));
