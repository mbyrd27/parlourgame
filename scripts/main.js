import { newTeamForm } from './team/NewTeamForm.js'
import { TeamSelect } from './player/NewPlayerForm.js';
import { displayScore } from './score/Leaderboard.js';

console.log("Welcome to the main module");

/* Old Starter Code to display sample data
renderTeams();
renderPlayers();
renderScores();
*/

newTeamForm();
TeamSelect();
displayScore();


