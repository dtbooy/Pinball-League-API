import { DataTypes, Deferrable } from "sequelize";
import { sequelize } from "../controllers/db.js";
import Matchup from "./matchupModel.js";
import GameType from "./gameTypeModel.js";
import Arena from "./arenaModel.js";

const Game = sequelize.define(
  "game",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    game_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    matchup_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Matchup,
        key: "id",
        deferrable: Deferrable.INITIALLY_DEFERRED,
      },
    },
    game_type_id: {
      // FK
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: GameType,
        key: "id",
        deferrable: Deferrable.INITIALLY_DEFERRED,
      },
    },
    arena_id: {
      // FK
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Arena,
        key: "id",
        deferrable: Deferrable.INITIALLY_DEFERRED,
      },
    },
  },
  {
    underscored: true, // keeps auto-generated attributes in snake case for PostgreSQL compatibility
  }
);

export default Game;
