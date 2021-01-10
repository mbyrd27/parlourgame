import { TeamList } from '../team/TeamList.js';
import { getTeams, useTeam } from '../team/TeamProvider.js'

const contentTarget = document.querySelector('.gameBoard')
const eventHub = document.querySelector('#container')
let gameState = []
let test = []

const renderTeamSelectors = (teamList) => {
    const populateTeamSelect = teamList.map(team => `<option id="${team.id}"value="${team.name}">${team.name}</option>`).join('')
    contentTarget.innerHTML = `<h2><u>Truncheons & Flagons</u></h2>
    <select class="teamDropdownGame" name="team1InitGame" id="gameSetup--team1">
    <option value="0">Please Select the First Team</option>${populateTeamSelect}
    </select>
    <select class="teamDropdownGame" name="team2InitGame" id="gameSetup--team2">
    <option value="0">Please Select the Second Team</option>${populateTeamSelect}
    </select>
    <select class="teamDropdownGame" name="team3InitGame" id="gameSetup--team3">
    <option value="0">Please Select the Third Team</option>${populateTeamSelect}
    </select>
    `
    const board = document.querySelector('.gameBoard')
    board.addEventListener('change', event => {
        gameState.push(event.target.value)
        if (gameState.length == 3) {
            const teamsReady = new CustomEvent('gameReady', {
                detail: gameState
            })
            eventHub.dispatchEvent(teamsReady);
        }
    })
}
        

const startGame = () => {
    getTeams()
        .then(() => {
            const teamCollection = useTeam();
            renderTeamSelectors(teamCollection);
        });
}

eventHub.addEventListener('beginGame', startGame)
