const eventHub = document.querySelector('#container')
const contentTarget = document.querySelector('.gameBoard')
import { gameState } from '../game/GameSetup.js'

export const renderGame = (round) => {

    contentTarget.innerHTML = `<h2>Round ${round}</h2>
    <form class="scoreRecorder">
    ${
        gameState.map(team => {
           return `<label for="${team.teamName}">${team.teamName}</label>
                   <input type="text" id="team--${team.teamId}" name="${team.teamName}">`
        }).join('')
    }
    <button type="button" class="btn-submit saveScores" name="recordScores" id="recordScores">Save Round Scores</button>
    </form>
    `
}

eventHub.addEventListener('gameReady', event => renderGame(1))




