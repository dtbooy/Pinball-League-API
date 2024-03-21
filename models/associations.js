//To DO:
// Add on delete / update methods to associations


//import models
import Season from "./seasonModel.js";
import GameType from "./gameTypeModel.js";
import Arena from "./arenaModel.js";
import Team from "./teamModel.js";
import Round from "./roundModel.js"; // season
import Player from "./playerModel.js"; // team
import ScoreAdjustment from "./scoreAdjustmentModel.js"; // round, team
import MatchTeam from "./matchTeamModel.js"; // player, team
import Matchup from "./matchupModel.js"; // round, match-team
import Game from "./gameModel.js"; // matchup, gameType, arena
import Result from "./resultModel.js"; // game

const applyAssociations = () => {
  // Season associations
  Season.belongsToMany(Team, { through: "SeasonTeams" }); // this should create a SeasonTeams association table automatically
  Team.belongsToMany(Season, { through: "SeasonTeams" });

  Season.hasMany(Round);
  Round.belongsTo(Season, {
    foreignKey: {
      name: "season_id",
    },
  });

  // Score adjustment associations
  ScoreAdjustment.belongsTo(Round, {
    foreignKey: {
      name: "round_id",
    },
  });
  Round.hasMany(ScoreAdjustment);

  ScoreAdjustment.belongsTo(Team, {
    foreignKey: {
      name: "team_id",
    },
  });
  Team.hasMany(ScoreAdjustment);

  // Round associations
  Round.hasMany(Matchup);
  Matchup.belongsTo(Round, {
    foreignKey: {
      name: "round_id",
    },
  });

  //Team associations
  Team.hasMany(Player);
  Player.belongsTo(Team, {
    foreignKey: {
      name: "team_id",
    },
  });

  Team.hasMany(MatchTeam);
  MatchTeam.belongsTo(Team, {
    foreignKey: {
      name: "team_id",
    },
  });

  // Player Associations
  Player.hasMany(MatchTeam);
  MatchTeam.belongsTo(Player, {
    foreignKey: {
      name: "player1_id",
    },
  });
  MatchTeam.belongsTo(Player, {
    foreignKey: {
      name: "player2_id",
    },
  });
  MatchTeam.belongsTo(Player, {
    foreignKey: {
      name: "player3_id",
    },
  });
  MatchTeam.belongsTo(Player, {
    foreignKey: {
      name: "player4_id",
    },
  });

  // Matchup associations
  // Match-team Associations
  MatchTeam.hasOne(Matchup);
  Matchup.belongsTo(MatchTeam, {
    foreignKey: {
      name: "home_team_id",
    },
  });
  Matchup.belongsTo(MatchTeam, {
    foreignKey: {
      name: "away_team_id",
    },
  });

  Matchup.hasMany(Game);
  Game.belongsTo(Matchup, {
    foreignKey: {
      name: "matchup_id",
    },
  });

  // Result, Game, GameType, Arena Associations
  Result.belongsTo(Game, {
    foreignKey: {
      name: "game_id",
    },
  });
  Game.hasOne(Result);

  Game.belongsTo(GameType, {
    foreignKey: {
      name: "game_type_id",
    },
  });
  GameType.hasMany(Game);

  Game.belongsTo(Arena, {
    foreignKey: {
      name: "arena_id",
    },
  });
  Arena.hasMany(Game);
};
export default applyAssociations;
