import { newTeamForm } from './team/NewTeamForm.js'
import { TeamSelect } from './player/NewPlayerForm.js';
import { displayTeams } from './team/TeamList.js'
import { listPlayerTotal } from './player/PlayerList.js';
import { StartGameButton } from './game/StartGameButton.js';
import './game/GameSetup.js';
import './score/ScoreList.js'
import './score/RecordScore.js'

console.log("Welcome to the main module");

newTeamForm();
TeamSelect();
displayTeams();
listPlayerTotal()
StartGameButton()






