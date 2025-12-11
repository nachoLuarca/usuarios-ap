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

app.use("/auth", authRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.json({ mensaje: "Gateway funcionando" });
});

app.listen(config.PORT, () => console.log("API Gateway en puerto", config.PORT));
