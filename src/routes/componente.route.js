const ComponenteController = require("../controllers/componente.controller");
const { Router } = require("express");
const schemaValidator = require("../middlewares/schemaValidator"); // Importar el middleware de validación
const componenteSchema = require("../schemas/componentes.schema");   // Importar el esquema Joi para Componente
const route = Router();

// Obtener todos los componentes
route.get("/", ComponenteController.getAll);

// Obtener un componente por ID
route.get("/:id", ComponenteController.getById);

// Crear un nuevo componente (con validación)
route.post("/", schemaValidator(componenteSchema), ComponenteController.create);

// Actualizar un componente (con validación)
route.put("/:id", schemaValidator(componenteSchema), ComponenteController.update);

// Eliminar un componente por ID
route.delete("/:id", ComponenteController.delete);

module.exports = route;

