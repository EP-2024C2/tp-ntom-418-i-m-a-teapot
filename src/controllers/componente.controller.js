const { Componente, Producto } = require("../models");

class ComponenteController {
  async getAll(req, res) {
    const componentes = await Componente.findAll();
    res.status(200).json(componentes);
  }

  async getById(req, res) {
    const componente = await Componente.findByPk(req.params.id);
    res.status(200).send(componente);
  }

  async getProductosByComponente(req, res) {
    const { id } = req.params;
    const componente = await Componente.findByPk(id, {
      through: { attributes: [] },
      include: [
        {
          model: Producto,
          attributes: ["nombre", "descripcion", "precio", "pathImg"],
          through: { attributes: [] },
        },
      ],
    });
    res.status(200).send(componente);
  }

  async create(req, res) {
    try {
      const componente = await Componente.create(req.body);
      res.status(201).send(componente);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async update(req, res) {
    const componente = await Componente.findByPk(req.params.id);
    componente.update(req.body);
    res.status(200).send(componente);
  }

  async delete(req, res) {
    const { id } = req.params;
    const componente = await Componente.findByPk(id);
    try {
      await componente.destroy();
      res.status(200).send({ message: "Componente eliminado correctamente" });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "No se puede eliminar el componente" });
    }
  }
}

module.exports = new ComponenteController();

/**
 *  async getFabricantesFromId(req, res) {
    const { id } = req.params;

    try {
      const producto = await Producto.findByPk(id, {
        attributes: ["id", "nombre", "descripcion", "precio", "pathImg"],
        include: [
          {
            model: Fabricante,
          },
        ],
      });

      res.status(200).json(producto);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener los productos.", error });
    }
  }

  async getComponentesFromId(req, res) {
    const { id } = req.params;

    try {
      const producto = await Producto.findByPk(id, {
        attributes: ["id", "nombre", "descripcion", "precio", "pathImg"],
        include: [
          {
            model: Componente,
          },
        ],
      });

      res.status(200).json(producto);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener los productos.", error });
    }
  }

  async setComponenteAssociation(req, res) {
    const { id } = req.params;
    const { body } = req; // Array de objetos con id

    const producto = await Producto.findByPk(id);

    try {
      const componentes = await Promise.all(
        body.map(async ({ id }) => {
          return await Componente.findByPk(id);
        })
      );

      await producto.addComponentes(componentes);

      res.status(200).json({ message: "Fabricantes asociados al producto" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al asociar los fabricantes.", error });
    }
  }

  async setFabricanteAssociation(req, res) {
    const { id } = req.params;
    const { body } = req;

    const producto = await Producto.findByPk(id);

    try {
      const fabricantes = await Promise.all(
        body.map(async ({ id }) => {
          return await Fabricante.findByPk(id);
        })
      );

      await producto.addFabricantes(fabricantes);

      res.status(200).json({ message: "Fabricantes asociados al producto" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al asociar los fabricantes.", error });
    }
  }
 */
