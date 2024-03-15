import { DataTypes, Deferrable } from "sequelize";
import { sequelize } from "../controllers/db.js";
import Team from "./teamModel.js";
import Round from "./roundModel.js";

const Matchup = sequelize.define(
  "matchup",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    home_team_id: {
      // FK
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Team,
        key: "id",
        deferrable: Deferrable.INITIALLY_DEFERRED,
      },
    },
    away_team_id: {
      // FK
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Team,
        key: "id",
        deferrable: Deferrable.INITIALLY_DEFERRED,
      },
    },
  },
  {
    underscored: true, // keeps auto-generated attributes in snake case for PostgreSQL compatibility
  }
);

export default Matchup;
