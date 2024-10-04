const ProductoController = require("../controllers/producto.controller");
const { Router } = require("express");
const route = Router();

route.get("/", ProductoController.getAll);

route.get("/:id", ProductoController.getById);

route.post("/", ProductoController.create);

route.put("/:id", ProductoController.update);

route.delete("/:id", ProductoController.delete);

module.exports = route;
