const FabricanteController = require("../controllers/fabricante.controller");
const { Router } = require("express");
const schemaValidator = require("../middlewares/schemaValidator");  // Importar el middleware de validación
const fabricanteSchema = require("../schemas/fabricantes.schema");   // Importar el esquema Joi para Fabricante
const route = Router();

// Obtener todos los fabricantes
route.get("/", FabricanteController.getAll);

// Obtener un fabricante por ID
route.get("/:id", FabricanteController.getById);

// Crear un nuevo fabricante (con validación)
route.post("/", schemaValidator(fabricanteSchema), FabricanteController.create);

// Actualizar un fabricante (con validación)
route.put("/:id", schemaValidator(fabricanteSchema), FabricanteController.update);

// Eliminar un fabricante por ID
route.delete("/:id", FabricanteController.delete);

module.exports = route;

