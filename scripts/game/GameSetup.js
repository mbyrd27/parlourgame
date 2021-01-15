import { getTeams, useTeam } from '../team/TeamProvider.js'

const contentTarget = document.querySelector('.gameBoard')
const eventHub = document.querySelector('#container')
export let gameState = []

const renderTeamSelectors = (teamList) => {
    const populateTeamSelect = teamList.map(team => `<option value="${team.id}">${team.name}</option>`).join('')
    contentTarget.innerHTML = `
    <div class="teamSelection">
    <h2><u>Truncheons & Flagons</u></h2>
    <select class="teamDropdownGame">
    <option value="0">Please Select the First Team</option>${populateTeamSelect}
    </select>
    <select class="teamDropdownGame" name="team2InitGame">
    <option value="0">Please Select the Second Team</option>${populateTeamSelect}
    </select>
    <select class="teamDropdownGame" name="team3InitGame">
    <option value="0">Please Select the Third Team</option>${populateTeamSelect}
    </select>
    </div>
    `
    const board = document.querySelector('.teamSelection')
    board.addEventListener('change', event => {
        const selectedTeam = event.target.options
        let gameObj = new Object()
        gameObj.teamId = parseInt(event.target.value)
        gameObj.teamName = selectedTeam[selectedTeam.selectedIndex].text
        gameObj.game_date = Date.now()
        gameObj.score = 0
        gameState.push(gameObj)
        if (gameState.length == 3) {
            const teamsReady = new CustomEvent('gameReady')
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
