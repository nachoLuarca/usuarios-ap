import Product from "../models/Product.js";

export const crearProducto = async (req, res) => {
  try {
    const nuevo = new Product(req.body);
    const guardado = await nuevo.save();
    res.json(guardado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Product.findById(req.params.id);
    if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const actualizado = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: "Producto no encontrado" });
    res.json({ mensaje: "Producto actualizado correctamente", producto: actualizado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    const eliminado = await Product.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: "Producto no encontrado" });
    res.json({ mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
