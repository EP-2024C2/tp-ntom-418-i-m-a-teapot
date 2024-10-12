'use strict';
const { Model } = require('sequelize');

function componente(sequelize, DataTypes) {
  class Componente extends Model {
    static associate(models) {
      Componente.belongsToMany(models.Producto, {
        through: 'ProductoComponente',
        foreignKey: 'componenteId',
        as: 'productos',
      });
    }
  }

  Componente.init(
    {
      nombre: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      pathImg: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Componente',
    }
  );

  return Componente;
}

module.exports = componente;

