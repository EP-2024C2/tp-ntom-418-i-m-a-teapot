const { Fabricante } = require("../models");

class FabricanteController {
  getAll(req, res) {
    res.send("GET /fabricantes");
  }

  getById(req, res) {
    res.send("GET /fabricantes/:id");
  }

  create(req, res) {
    res.send("POST /fabricantes");
  }

  update(req, res) {
    res.send("PUT /fabricantes/:id");
  }

  delete(req, res) {
    res.send("DELETE /fabricantes/:id");
  }
}

module.exports = new FabricanteController();
