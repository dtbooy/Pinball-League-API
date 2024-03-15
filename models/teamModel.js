import { DataTypes } from "sequelize";
import { sequelize } from "../controllers/db.js";

/* 
id - PK 
team_name - String - NOT NULL
active - Boolean - DEFAULT true
description - String -
img_url - String  
password_hash - String - NOT NULL
*/

const Team = sequelize.define(
  "Team",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true // Don't allow same team names
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    img_url: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true, // keeps auto-generated attributes in snake case for PostgreSQL compatibility
  }
);
export default Team;
