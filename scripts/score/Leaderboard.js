import {useTeam, getTeams } from '../team/TeamProvider.js'

const contentTarget = document.querySelector('.leaderboard')
const eventHub = document.querySelector('#container')

export const LeaderBoard = (addedTeam) => {
    contentTarget.innerHTML = `
    <h3 class="leaderBoardHeader">Leaderboard</h3>
    <div class="scoreboard">
        <ul class="teamList">
            <li class="teamList--header"><u>Name</u></li>
            ${
                addedTeam.map(team => {
                    return `<li>${team.name}</li>`
                }).join('')
            }
        </ul>
        <ul class="playerList">
            <li class="playerList--header"><u>Players</u></li>
            ${
                addedTeam.map(team => {
                    return `<li>${team.players}</li>`
                }).join('')
            }
        </ul>
        <ul class="scoreList">
            <li class="scoreList--header"><u>Score</u></li>
            ${
                addedTeam.map(team => {
                    return `<li>${team.score}</li>`
                }).join('')
            }
        </ul>
    </div> 
    `
}

export const displayScore = () => {
    getTeams().then(() => {
        const currentTeams = useTeam();
        LeaderBoard(currentTeams);
    }) 
}

eventHub.addEventListener('teamStateChanged', displayScore);