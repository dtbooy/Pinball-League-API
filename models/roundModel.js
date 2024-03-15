import { DataTypes, Deferrable } from "sequelize";
import { sequelize } from "../controllers/db.js";
import Season from "./seasonModel.js";

/* 
id - PK 
round number - int NOT NULL
season_id - int NOT NULL - FK
*/

const Round = sequelize.define(
  "round",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    round_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season_id: {
      // FK
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // This is a reference to another model
        model: Season,
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

export default Round;
