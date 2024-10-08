"use strict";
const { Model } = require("sequelize");

function producto(sequelize, DataTypes) {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Producto.init(
    {
      nombre: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      precio: DataTypes.FLOAT,
      pathImg: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Productos",
    }
  );

  return Producto;
}

module.exports = producto;
