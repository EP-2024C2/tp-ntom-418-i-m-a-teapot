const { Producto } = require("../models");

class ProductoController {
  async getAll(req, res) {
    try {
      const productos = await Producto.findAll();
      res.status(200).json(productos);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los productos" });
    }
  }

  async getById(req, res) {
    try {
      const producto = await Producto.findByPk(req.params.id);
      if (!producto) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
      res.status(200).json(producto);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el producto" });
    }
  }

  async create(req, res) {
    try {
      const nuevoProducto = await Producto.create(req.body);
      res.status(201).json(nuevoProducto);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el producto" });
    }
  }

  async update(req, res) {
    try {
      const producto = await Producto.findByPk(req.params.id);
      if (!producto) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
      await producto.update(req.body);
      res.status(200).json(producto);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el producto" });
    }
  }

  async delete(req, res) {
    try {
      const producto = await Producto.findByPk(req.params.id);
      if (!producto) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
      await producto.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el producto" });
    }
  }
}

module.exports = new ProductoController();

