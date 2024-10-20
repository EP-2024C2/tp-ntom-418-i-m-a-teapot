"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Componente extends Model {
    static associate(models) {
      Componente.belongsToMany(models.Producto, {
        through: "Producto_Componente",
        timestamps: false,
      });
    }
  }
  Componente.init(
    {
      nombre: { type: DataTypes.STRING, allowNull: false },
      descripcion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Componente",
      timestamps: false,
    }
  );
  return Componente;
};
