const ProductoController = require("../controllers/producto.controller");
const { Router } = require("express");
const schemaValidator = require("../middlewares/schemaValidator");
const productoSchema = require("../schemas/productos.schema");
const route = Router();

route.get("/", ProductoController.getAll);

route.get("/:id", ProductoController.getById);

// Crear un nuevo producto (con validación)
route.post("/", schemaValidator(productoSchema), ProductoController.create);

// Actualizar un producto existente (con validación)
route.put("/:id", schemaValidator(productoSchema), ProductoController.update);

// Eliminar un producto
route.delete("/:id", ProductoController.delete);

module.exports = route;

