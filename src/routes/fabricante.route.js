const FabricanteController = require("../controllers/fabricante.controller");
const { Router } = require("express");
const route = Router();

route.get("/", FabricanteController.getAll);

route.get("/:id", FabricanteController.getById);

route.post("/", FabricanteController.create);

route.put("/:id", FabricanteController.update);

route.delete("/:id", FabricanteController.delete);

module.exports = route;
