'use strict';
const { Model } = require('sequelize');

function producto(sequelize, DataTypes) {
  class Producto extends Model {
    static associate(models) {
      Producto.belongsToMany(models.Componente, {
        through: 'ProductoComponente',
        foreignKey: 'productoId',
        as: 'componentes',
      });
    }
  }

  Producto.init(
    {
      nombre: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      precio: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Producto',
    }
  );

  return Producto;
}

module.exports = producto;
