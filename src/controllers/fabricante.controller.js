const { Fabricante } = require("../models");

class FabricanteController {
  async getAll(req, res) {
    try {
      const fabricantes = await Fabricante.findAll();
      res.status(200).json(fabricantes);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los fabricantes", error });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const fabricante = await Fabricante.findByPk(id);
      
      if (!fabricante) {
        return res.status(404).json({ message: "Fabricante no encontrado" });
      }
      
      res.status(200).json(fabricante);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el fabricante", error });
    }
  }

  async create(req, res) {
    try {
      const nuevoFabricante = await Fabricante.create(req.body);
      res.status(201).json(nuevoFabricante);
    } catch (error) {
      res.status(500).json({ message: "Error al crear el fabricante", error });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const fabricante = await Fabricante.findByPk(id);
      
      if (!fabricante) {
        return res.status(404).json({ message: "Fabricante no encontrado" });
      }
      
      await fabricante.update(req.body);
      res.status(200).json(fabricante);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar el fabricante", error });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const fabricante = await Fabricante.findByPk(id);
      
      if (!fabricante) {
        return res.status(404).json({ message: "Fabricante no encontrado" });
      }
      
      await fabricante.destroy();
      res.status(200).json({ message: "Fabricante eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el fabricante", error });
    }
  }
}

module.exports = new FabricanteController();

