const FabricanteController = require("../controllers/fabricante.controller");
const { Router } = require("express");
const { schemaValidator, validateId } = require("../middlewares");
const { fabricanteSchema } = require("../schemas");
const { Fabricante } = require("../models");
const route = Router();

// Obtener todos los fabricantes
route.get("/", FabricanteController.getAll);

route.get(
  "/:id",
  validateId(Fabricante, "producto"),
  FabricanteController.getById
);

route.get(
  "/:id/productos",
  validateId(Fabricante, "producto"),
  FabricanteController.getProductosByFabricante
);

route.post("/", schemaValidator(fabricanteSchema), FabricanteController.create);

route.put(
  "/:id",
  schemaValidator(fabricanteSchema),
  validateId(Fabricante, "producto"),
  FabricanteController.update
);

route.delete(
  "/:id",
  validateId(Fabricante, "producto"),
  FabricanteController.delete
);

module.exports = route;
