import { DataTypes } from 'sequelize'
import { sequelize } from "../controllers/db.js";
/* 
id - PK 
name - string - NOT NULL
*/

const Arena = sequelize.define('arena', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
}, {
    underscored: true // keeps auto-generated attributes in snake case for PostgreSQL compatibility
  }
);

export default Arena