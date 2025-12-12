import jwt from "jsonwebtoken";

export const verificarToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ mensaje: "Token faltante" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded; // Guardamos info del usuario en req
    next();
  } catch (error) {
    res.status(401).json({ mensaje: "Token inválido" });
  }
};
