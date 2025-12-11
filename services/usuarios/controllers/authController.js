import Usuario from "../models/Usuario.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;

        const existe = await Usuario.findOne({ email });
        if (existe) return res.status(400).json({ mensaje: "El email ya está registrado." });

        const hashed = await bcrypt.hash(password, 10);

        const nuevoUsuario = await Usuario.create({
            nombre,
            email,
            password: hashed
        });

        res.json({ mensaje: "Usuario creado correctamente", usuario: nuevoUsuario });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const usuario = await Usuario.findOne({ email });
        if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });

        const valido = await bcrypt.compare(password, usuario.password);
        if (!valido) return res.status(401).json({ mensaje: "Contraseña incorrecta" });

        const token = jwt.sign(
            { id: usuario._id },
            process.env.JWT_SECRET || "secreto123",
            { expiresIn: "7d" }
        );

        res.json({ mensaje: "Login correcto", token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
