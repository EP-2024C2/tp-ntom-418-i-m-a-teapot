const ProductoController = require("../controllers/producto.controller");
const { schemaValidator, validateId } = require("../middlewares");
const {
  productoSchema,
  fabricanteSchema,
  componenteSchema,
} = require("../schemas");
const { Producto } = require("../models");
const { Router } = require("express");
const route = Router();

route.get("/", ProductoController.getAll);

route.get("/:id", validateId(Producto, "producto"), ProductoController.getById);

route.get("/:id/componentes", ProductoController.getComponentesByProducto);

route.get("/:id/fabricantes", ProductoController.getFabricantesByProducto);

route.post("/", schemaValidator(productoSchema), ProductoController.create);

route.post(
  "/:id/componentes",
  schemaValidator(componenteSchema),
  ProductoController.createComponenteByProducto
);

route.post(
  "/:id/fabricantes",
  schemaValidator(fabricanteSchema),
  ProductoController.createFabricanteByProducto
);

route.put(
  "/:id",
  schemaValidator(productoSchema),
  validateId(Producto, "producto"),
  ProductoController.update
);

route.delete(
  "/:id",
  validateId(Producto, "producto"),
  ProductoController.delete
);

module.exports = route;
