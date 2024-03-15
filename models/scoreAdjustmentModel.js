import { DataTypes, Deferrable } from "sequelize";
import { sequelize } from "../controllers/db.js";
import Team from "./teamModel.js";
import Round from "./roundModel.js";

const ScoreAdjustment = sequelize.define(
  "score_adjustment",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    forfeit: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    cap_penalty: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    team_id: {
      // FK
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Team,
        key: "id",
        deferrable: Deferrable.INITIALLY_DEFERRED,
      },
    },
    round_id: {
      // FK
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Round,
        key: "id",
        deferrable: Deferrable.INITIALLY_DEFERRED,
      },
    },
  },
  {
    underscored: true, // keeps auto-generated attributes in snake case for PostgreSQL compatibility
  }
);

export default ScoreAdjustment;
