// import sequelize
import { sequelize } from "./db.js";

//import models
import Season from "../models/seasonModel.js";
// import gameType } from "../models/gameTypeModel.js";
// import arena } from "../models/arenaModel.js";
import Team from "../models/teamModel.js";
import Round from "../models/roundModel.js"; // season
// import Player from "../models/playerModel.js"; // team
// import ScoreAdjustment from "../models/scoreAdjustmentModel.js"; // round, team
// import MatchTeam from "../models/matchTeamModel.js"; // player, team
// import Matchup from "../models/matchupModel.js"; // round, match-team
// import Game from "../models/gameModel.js";  // matchup, gameType, arena
// import Result from "../models/resultModel.js"; // game

// drop database
// await sequelize.drop()
// console.log("All tables dropped!");

// create all tables
await sequelize.sync()
console.log("All models were synchronized successfully.");
