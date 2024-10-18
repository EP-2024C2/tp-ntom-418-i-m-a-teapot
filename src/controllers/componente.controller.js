const { Componente } = require("../models");

class ComponenteController {
  // Obtener todos los componentes
  async getAll(req, res) {
    try {
      const componentes = await Componente.findAll();
      res.status(200).json(componentes);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los componentes" });
    }
  }

  // Obtener un componente por ID
  async getById(req, res) {
    try {
      const componente = await Componente.findByPk(req.params.id);
      if (!componente) {
        return res.status(404).json({ error: "Componente no encontrado" });
      }
      res.status(200).json(componente);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el componente" });
    }
  }

  // Crear un nuevo componente
  async create(req, res) {
    try {
      const nuevoComponente = await Componente.create(req.body);
      res.status(201).json(nuevoComponente);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el componente" });
    }
  }

  // Actualizar un componente existente
  async update(req, res) {
    try {
      const componente = await Componente.findByPk(req.params.id);
      if (!componente) {
        return res.status(404).json({ error: "Componente no encontrado" });
      }
      await componente.update(req.body);
      res.status(200).json(componente);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el componente" });
    }
  }

  // Eliminar un componente por ID
  async delete(req, res) {
    try {
      const componente = await Componente.findByPk(req.params.id);
      if (!componente) {
        return res.status(404).json({ error: "Componente no encontrado" });
      }
      await componente.destroy();
      res.status(204).send(); // No content
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el componente" });
    }
  }
}

module.exports = new ComponenteController();

