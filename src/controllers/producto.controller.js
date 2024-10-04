const { Producto } = require("../models");

class ProductoController {
  getAll(req, res) {
    res.send("GET /productos");
  }

  getById(req, res) {
    res.send("GET /productos/:id");
  }

  create(req, res) {
    res.send("POST /productos");
  }

  update(req, res) {
    res.send("PUT /productos/:id");
  }

  delete(req, res) {
    res.send("DELETE /productos/:id");
  }
}

module.exports = new ProductoController();
