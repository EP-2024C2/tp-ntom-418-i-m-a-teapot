const { Componente } = require("../models");

class ComponenteController {
  getAll(req, res) {
    res.send("GET /componentes");
  }

  getById(req, res) {
    res.send("GET /componentes/:id");
  }

  create(req, res) {
    res.send("POST /componentes");
  }

  update(req, res) {
    res.send("PUT /componentes/:id");
  }

  delete(req, res) {
    res.send("DELETE /componentes/:id");
  }
}

module.exports = new ComponenteController();
