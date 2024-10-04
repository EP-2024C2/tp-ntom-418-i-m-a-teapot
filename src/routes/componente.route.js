const ComponenteController = require("../controllers/componente.controller");
const { Router } = require("express");
const route = Router();

route.get("/", ComponenteController.getAll);

route.get("/:id", ComponenteController.getById);

route.post("/", ComponenteController.create);

route.put("/:id", ComponenteController.update);

route.delete("/:id", ComponenteController.delete);

module.exports = route;
