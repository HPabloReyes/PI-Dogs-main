const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "raza",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.UUID,
        allownull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      altura: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      peso_maximo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      peso_minimo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      peso: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true,
      },
      años_de_vida: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      imagen: {
        type: DataTypes.STRING,
        defaultValue:
          "https://www.petdarling.com/wp-content/uploads/2016/06/perritos-tiernos.jpg",
      },
    },
    {
      timestamps: false,
    }
  );
};
