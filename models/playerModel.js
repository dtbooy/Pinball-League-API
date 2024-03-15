import { DataTypes, Deferrable } from "sequelize";
import { sequelize } from "../controllers/db.js";
import Team from "./teamModel.js";

/* 
id - PK 
name - string - NOT NULL
ifpa_number - int - NOT NULL
value - int - NOT NULL
team_id - int - FK - team, id
*/

const Player = sequelize.define(
  "player",
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
    ifpa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    team_id: {
      // FK
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // This is a reference to another model
        model: Team,
        // This is the column name of the referenced model
        key: "id",
        deferrable: Deferrable.INITIALLY_DEFERRED,
        // Options:
        // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
        // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
        // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
      },
    },
  },
  {
    underscored: true, // keeps auto-generated attributes in snake case for PostgreSQL compatibility
  }
);

export default Player;
