const { DataTypes, INTEGER } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "temperament",
    {
      id: {
        type: DataTypes.UUID, //letras numeros separadospor guiones
        defaultValue: DataTypes.UUIDV4, //algoritomo que se encarga de crear el numero aleatorio de UUID
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
