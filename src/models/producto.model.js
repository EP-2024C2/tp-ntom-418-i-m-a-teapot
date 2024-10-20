"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    static associate(models) {
      Producto.belongsToMany(models.Fabricante, {
        through: "Producto_Fabricante",
        timestamps: false,
      });
      Producto.belongsToMany(models.Componente, {
        through: "Producto_Componente",
        timestamps: false,
      });
    }
  }
  Producto.init(
    {
      nombre: { type: DataTypes.STRING, allowNull: false },
      descripcion: DataTypes.STRING,
      precio: { type: DataTypes.FLOAT, allowNull: false },
      pathImg: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Producto",
      timestamps: false,
    }
  );
  return Producto;
};
