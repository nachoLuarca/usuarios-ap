import jwt from "jsonwebtoken";
import config from "../config.js";

export const verifyToken = (req, res, next) => {
  const header = req.headers["authorization"];

  if (!header) return res.status(401).json({ mensaje: "Token faltante" });

  const [scheme, token] = header.split(" ");

  if (scheme !== "Bearer") return res.status(401).json({ mensaje: "Formato Bearer requerido" });

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ mensaje: "Token inválido" });
  }
};
