import { DataTypes } from "sequelize";
import { sequelize } from "../controllers/db.js";

const GameType = sequelize.define(
  "game_type",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    home1: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    home2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    home3: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    home4: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    away1: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    away2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    away3: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    away4: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    underscored: true, // keeps auto-generated attributes in snake case for PostgreSQL compatibility,
    timestamps: false 
  }
);

export default GameType;
