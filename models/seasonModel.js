import { DataTypes } from "sequelize";
import { sequelize } from "../controllers/db.js";
/* 
id - PK 
year - int NOT NULL
desctiption - text(50)
*/

const Season = sequelize.define(
  "season",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    underscored: true, // keeps auto-generated attributes in snake case for PostgreSQL compatibility
  }
);

export default Season;
