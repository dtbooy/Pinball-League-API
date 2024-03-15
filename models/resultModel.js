import { DataTypes, Deferrable } from "sequelize";
import { sequelize } from "../controllers/db.js";
import Game from "./gameModel.js";

const Result = sequelize.define(
  "result",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    home_wins: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Game,
        key: "id",
        deferrable: Deferrable.INITIALLY_DEFERRED,
      },
    },
  },
  {
    underscored: true, // keeps auto-generated attributes in snake case for PostgreSQL compatibility
  }
);

export default Result;
