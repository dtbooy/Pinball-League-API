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

// Seed table teams
const teams = await Team.bulkCreate([
    {
        active: true,
        img_url: "readyPlayer.png",
        password: "Ready Player",
        description: "A description",
        name: "Ready Player",
    },
    {
        active: true,
        password: "Press Tart",
        name: "Press Tart",
    },
    {
        active: true,
        password: "Tilty as Charged",
        name: "Tilty as Charged",
    },
    {
        active: true,
        password: "The Cunning Stunts!",
        name: "The Cunning Stunts!",
    },
    {
        active: true,
        password: "Flipadelphia",
        name: "Flipadelphia",
    },
    {
        active: true,
        password: "SWL 4.0",
        name: "SWL 4.0",
    },
    {
        active: true,
        password: "Two Extra Balls",
        name: "Two Extra Balls",
    },
    {
        active: true,
        password: "Pin Chickens",
        name: "Pin Chickens",
    },
    {
        active: true,
        password: "The Pindingo's",
        name: "The Pindingo's",
    },
    {
        active: true,
        password: "Mixmaster Millhouse",
        name: "Mixmaster Millhouse and the Easy Lovin, Travelling Ex Russian Olympic Break Dance Exstravaganza",
    },
    {
        active: false,
        password: "Free Agents",
        name: "Free Agents",
    },
])
   
// Seed table rounds
const rounds = await Round.bulkCreate([
    {
        season_id: seasons.id,
        round_number: 1
    },
    {
        season_id: seasons.id,
        round_number: 2
    },
    {
        season_id: seasons.id,
        round_number: 3
    },
    {
        season_id: seasons.id,
        round_number: 4
    },
    {
        season_id: seasons.id,
        round_number: 5
    },
    {
        season_id: seasons.id,
        round_number: 6
    },
    {
        season_id: seasons.id,
        round_number: 7
    },
    {
        season_id: seasons.id,
        round_number: 8
    },
    {
        season_id: seasons.id,
        round_number: 9
    },
])

// Seed table players
const players = await Player.bulkCreate([
{
    name: "Dirk Booy",
    ifpa: 42278,
    value: 5,
    team_id: teams[0].id
},
{
    name: "Michelle Riding",
    ifpa: null,
    value: 3,
    team_id: teams[0].id
},
{
    name: "Steven Riding",
    ifpa: null,
    value: 4,
    team_id: teams[0].id
},
{
    name: "Brett Wheeler",
    ifpa: 51642,
    value: 2,
    team_id: teams[0].id
},
{
    name: "Caitlan Christie",
    ifpa: null,
    value: 2,
    team_id: teams[0].id
},
{
    name: "Jason Lambert",
    ifpa: null,
    value: 6,
    team_id: teams[1].id
},
{
    name: "Kerrie McAloney",
    ifpa: null,
    value: 3,
    team_id: teams[1].id
},
{
    name: "Zach Kominar",
    ifpa: null,
    value: 3,
    team_id: teams[1].id
},
{
    name: "Erik Veland",
    ifpa: null,
    value: 3,
    team_id: teams[1].id
},
{
    name: "Brad Claire",
    ifpa: null,
    value: 3,
    team_id: teams[1].id
},
{
    name: "Tony Fischer",
    ifpa: null,
    value: 3,
    team_id: teams[1].id
},
{
    name: "Jesse Holt",
    ifpa: null,
    value: 5,
    team_id: teams[2].id
},
{
    name: "AJ Wildey",
    ifpa: null,
    value: 3,
    team_id: teams[2].id
},
{
    name: "Justin Thompson ",
    ifpa: null,
    value: 4,
    team_id: teams[2].id
},
{
    name: "Grant Clements ",
    ifpa: null,
    value: 3,
    team_id: teams[2].id
},
{
    name: "Tom Carey",
    ifpa: null,
    value: 5,
    team_id: teams[2].id
},
{
    name: "Justin Hallowes",
    ifpa: null,
    value: 4,
    team_id: teams[2].id
},
{
    name: "James Hulk",
    ifpa: null,
    value: 5,
    team_id: teams[3].id
},
{
    name: "Emily Jane Smith",
    ifpa: null,
    value: 4,
    team_id: teams[3].id
},
{
    name: "Dan Olejniczak",
    ifpa: null,
    value: 4,
    team_id: teams[3].id
},
{
    name: "Tris Veal ",
    ifpa: null,
    value: 1,
    team_id: teams[3].id
},
{
    name: "Dan Etiel",
    ifpa: null,
    value: 3,
    team_id: teams[4].id
},
{
    name: "Bobby Rein",
    ifpa: null,
    value: 2,
    team_id: teams[4].id
},
{
    name: "Luke Gallow",
    ifpa: null,
    value: 2,
    team_id: teams[4].id
},
{
    name: "Stuart Thornton",
    ifpa: null,
    value: 6,
    team_id: teams[4].id
},
{
    name: "Jonathan Chabowski",
    ifpa: null,
    value: 5,
    team_id: teams[4].id
},
{
    name: "Phil Dudley",
    ifpa: null,
    value: 4,
    team_id: teams[5].id
},
{
    name: "Michael Dodt",
    ifpa: null,
    value: 6,
    team_id: teams[5].id
},
{
    name: "Gary Eldershaw",
    ifpa: null,
    value: 4,
    team_id: teams[5].id
},
{
    name: "Chris Bancroft",
    ifpa: null,
    value: 2,
    team_id: teams[5].id
},
{
    name: "Chloe Musk",
    ifpa: null,
    value: 1,
    team_id: teams[5].id
},
{
    name: "Ivy  ",
    ifpa: null,
    value: 1,
    team_id: teams[5].id
},
{
    name: "Sheamus",
    ifpa: null,
    value: 1,
    team_id: teams[5].id
},
{
    name: "Escher Lefkoff",
    ifpa: null,
    value: 6,
    team_id: teams[6].id
},
{
    name: "Emily Cosson",
    ifpa: null,
    value: 5,
    team_id: teams[6].id
},
{
    name: "Pete Davidson",
    ifpa: null,
    value: 4,
    team_id: teams[6].id
},
{
    name: "Rhi Coolican (c)",
    ifpa: null,
    value: 2,
    team_id: teams[6].id
},
{
    name: "Sarah Stamp",
    ifpa: null,
    value: 3,
    team_id: teams[6].id
},
{
    name: "Alyssa Ford",
    ifpa: null,
    value: 1,
    team_id: teams[6].id
},
{
    name: "Joe Wade",
    ifpa: null,
    value: 5,
    team_id: teams[7].id
},
{
    name: "Emma King",
    ifpa: null,
    value: 3,
    team_id: teams[7].id
},
{
    name: "Katrina Pingnam",
    ifpa: null,
    value: 2,
    team_id: teams[7].id
},
{
    name: "Justine Cadell",
    ifpa: null,
    value: 2,
    team_id: teams[7].id
},
{
    name: "Timothy Craig",
    ifpa: null,
    value: 5,
    team_id: teams[8].id
},
{
    name: "Tom Fletcher",
    ifpa: null,
    value: 6,
    team_id: teams[8].id
},
{
    name: "Meg Hamilton",
    ifpa: null,
    value: 1,
    team_id: teams[8].id
},
{
    name: "Michelle O'Flanagan",
    ifpa: null,
    value: 1,
    team_id: teams[8].id
},
{
    name: "Greg F",
    ifpa: null,
    value: 5,
    team_id: teams[9].id
},
{
    name: "Michael S",
    ifpa: null,
    value: 3,
    team_id: teams[9].id
},
{
    name: "Ross ",
    ifpa: null,
    value: 3,
    team_id: teams[9].id
},
{
    name: "Jason M",
    ifpa: null,
    value: 3,
    team_id: teams[9].id
},
])

// Seed table score_adjustment

// Seed table match_team

// Seed table matchup

// Seed table game

// Seed table results

