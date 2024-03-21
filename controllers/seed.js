// import sequelize
import { sequelize } from "./db.js";

//import models
import Season from "../models/seasonModel.js";
import GameType from "../models/gameTypeModel.js";
import Arena from "../models/arenaModel.js";
import Team from "../models/teamModel.js";
import Round from "../models/roundModel.js"; // season
import Player from "../models/playerModel.js"; // team
import ScoreAdjustment from "../models/scoreAdjustmentModel.js"; // round, team
import MatchTeam from "../models/matchTeamModel.js"; // player, team
import Matchup from "../models/matchupModel.js"; // round, match-team
import Game from "../models/gameModel.js"; // matchup, gameType, arena
import Result from "../models/resultModel.js"; // game
import applyAssociations from "../models/associations.js";

applyAssociations()

// drop database
await sequelize.drop();
console.log("All tables dropped!");

// create all tables
await sequelize.sync();
console.log("All models were synchronized successfully.");

// Seed Seasons Table
const seasons = await Season.create(
  { year: 2024 ,
   description: "Forth season of Netherworld pinball league" });

// Seed GameType Table
const gameTypes = await GameType.bulkCreate([
  {
    name: "singles1",
    description: "Home Player 1 vs Away Player 1",
    home1: true,
    away1: true,
  },
  {
    name: "singles2",
    description: "Home Player 2 vs Away Player 2",
    home2: true,
    away2: true,
  },
  {
    name: "singles3",
    description: "Home Player 3 vs Away Player 3",
    home3: true,
    away3: true,
  },
  {
    name: "singles4",
    description: "Home Player 4 vs Away Player 4",
    home4: true,
    away4: true,
  },
  {
    name: "doubles1",
    description: "Home Player 1 & Player 2 vs Away Player 1 & Player 2",
    home1: true,
    home2: true,
    away1: true,
    away2: true,
  },
  {
    name: "doubles2",
    description: "Home Player 3 & Player 4 vs Away Player 3 & Player 4",
    home3: true,
    home4: true,
    away3: true,
    away4: true,
  },
  {
    name: "doubles3",
    description: "Home Player 2 & Player 3 vs Away Player 2 & Player 3",
    home2: true,
    home3: true,
    away2: true,
    away3: true,
  },
  {
    name: "doubles4",
    description: "Home Player 1 & Player 4 vs Away Player 1 & Player 4",
    home1: true,
    home4: true,
    away1: true,
    away4: true,
  },
  {
    name: "doubles5",
    description: "Home Player 1 & Player 3 vs Away Player 1 & Player 3",
    home1: true,
    home3: true,
    away1: true,
    away3: true,
  },
  {
    name: "doubles6",
    description: "Home Player 2 & Player 4 vs Away Player 2 & Player 4",
    home2: true,
    home4: true,
    away2: true,
    away4: true,
  },
  {
    name: "split1",
    description: "Home Player 1 & Player 2 vs Away Player 1 & Player 2",
    home1: true,
    home2: true,
    away1: true,
    away2: true,
  },
  {
    name: "split2",
    description: "Home Player 3 & Player 4 vs Away Player 3 & Player 4",
    home3: true,
    home4: true,
    away3: true,
    away4: true,
  },
  {
    name: "split3",
    description: "Home Player 2 & Player 3 vs Away Player 2 & Player 3",
    home2: true,
    home3: true,
    away2: true,
    away3: true,
  },
  {
    name: "split4",
    description: "Home Player 1 & Player 4 vs Away Player 1 & Player 4",
    home1: true,
    home4: true,
    away1: true,
    away4: true,
  },
  {
    name: "split5",
    description: "Home Player 1 & Player 3 vs Away Player 1 & Player 3",
    home1: true,
    home3: true,
    away1: true,
    away3: true,
  },
  {
    name: "split6",
    description: "Home Player 2 & Player 4 vs Away Player 2 & Player 4",
    home2: true,
    home4: true,
    away2: true,
    away4: true,
  },
  // add the other 30 combinations of splits here later
  {
    name: "tie-breaker",
    description: "Four vs Four - highest combined score wins",
    home1: true,
    home2: true,
    home3: true,
    home4: true,
    away1: true,
    away2: true,
    away3: true,
    away4: true,
  },
]);

// Seed arena table
const arenas = await Arena.bulkCreate([
  {
    name: "Monster Bash",
  },
  {
    name: "The Addams Family",
  },
  {
    name: "Willy Wonka",
  },
  {
    name: "Rick and Morty",
  },
  {
    name: "The GetAway",
  },
  {
    name: "FishTales",
  },
  {
    name: "DeadPool",
  },
  {
    name: "Avengers",
  },
  {
    name: "Labyrinth",
  },
  {
    name: "007",
  }
])

