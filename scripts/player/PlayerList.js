import { getPlayers, usePlayers } from './PlayerProvider.js'
import { getTeams, useTeam } from '../team/TeamProvider.js'
import { renderPlayerForm } from './NewPlayerForm.js'

const contentTarget = document.querySelector('.playerList')
const eventHub = document.querySelector('#container')



export const renderTotal = addedPlayer => {
    getTeams()
    .then(() => {
        const teamList = useTeam()
        //console.log(teamList)
        contentTarget.innerHTML = `<li class="playerList--header"><u>Players</u></li>
        ${
            teamList.map(team => {
                const matchingTeam = addedPlayer.filter(player => player.teamId === team.id)
                //console.log(matchingTeam)
                return `<li>${matchingTeam.length}</li>`
            }).join('')
        }`
        renderPlayerForm(teamList);
        })        
    }

export const listPlayerTotal = () => {
    getPlayers()
        .then(() => {
            const playerList = usePlayers()
            renderTotal(playerList)
        })
}

eventHub.addEventListener('playerAdded', listPlayerTotal)

