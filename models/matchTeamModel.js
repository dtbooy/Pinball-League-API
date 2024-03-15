import { DataTypes, Deferrable } from "sequelize";
import { sequelize } from "../controllers/db.js";
import Player from "./playerModel.js";
import Team from "./teamModel.js";

const MatchTeam = sequelize.define(
  "match_team",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Team,
        key: "id",
        deferrable: Deferrable.INITIALLY_DEFERRED,
      },
    },
    player1_id: {
      // FK
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Player,
        key: "id",
        deferrable: Deferrable.INITIALLY_DEFERRED,
      },
    },
    player2_id: {
      // FK
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Player,
        key: "id",
        deferrable: Deferrable.INITIALLY_DEFERRED,
      },
    },
    player3_id: {
      // FK
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Player,
        key: "id",
        deferrable: Deferrable.INITIALLY_DEFERRED,
      },
    },
    player4_id: {
      // FK
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Player,
        key: "id",
        deferrable: Deferrable.INITIALLY_DEFERRED,
      },
    },
  },
  {
    underscored: true, // keeps auto-generated attributes in snake case for PostgreSQL compatibility
  }
);

export default MatchTeam;
