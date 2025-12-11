import Usuario from "../models/Usuario.js";

export const perfil = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.userId).select("-password");
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
