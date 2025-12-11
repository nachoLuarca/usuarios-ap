import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    const header = req.headers["authorization"];

    console.log("HEADER RECIBIDO:", header); // <<--- IMPORTANTE

    if (!header) {
        return res.status(401).json({ mensaje: "Token faltante" });
    }

    const token = header.split(" ")[1];

    if (!token) {
        return res.status(401).json({ mensaje: "Token faltante" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "secreto123");
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ mensaje: "Token inválido" });
    }
};
