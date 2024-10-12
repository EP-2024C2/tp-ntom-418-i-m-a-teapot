"use strict";
const { Model } = require("sequelize");

function fabricante(sequelize, DataTypes) {
  class Fabricante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relación 1:N con Producto
      Fabricante.hasMany(models.Producto, {
        foreignKey: 'fabricanteId',
        as: 'productos', // Alias para la relación
      });
    }
  }

  Fabricante.init(
    {
      nombre: DataTypes.STRING,
      direccion: DataTypes.STRING,
      numeroContacto: DataTypes.INTEGER,
      pathImgPerfil: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Fabricante",
    }
  );

  return Fabricante;
}

module.exports = fabricante;
