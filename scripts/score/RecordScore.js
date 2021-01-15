import {gameState} from '../game/GameSetup.js'
import { StartGameButton } from '../game/StartGameButton.js'
import {renderGame} from './ScoreList.js'
import { updateScore } from './ScoreProvider.js'

const eventHub = document.querySelector('#container')
const modalTarget = document.querySelector('.modalContainer')

const roundTotal = (score1, score2, score3) => score1 + score2 + score3
let currentRound = 1

eventHub.addEventListener('click', e => {
    if (e.target.id === 'recordScores') {
        let scoreTeamOne = parseInt(document.querySelector(`#team--${gameState[0].teamId}`).value)
        let scoreTeamTwo = parseInt(document.querySelector(`#team--${gameState[1].teamId}`).value)
        let scoreTeamThree = parseInt(document.querySelector(`#team--${gameState[2].teamId}`).value)
        let checkTotal = roundTotal(scoreTeamOne, scoreTeamTwo, scoreTeamThree)

        if (checkTotal !== 3) {

            modalTarget.innerHTML = `
            <!-- Modal content -->
            <div class="modal-content">
              <span class="close">&times;</span>
              <p>The total score for the game must add up to 3!</p>
            </div>`
            document.querySelector('.close').onclick = () =>  modalTarget.innerHTML = ''
        }
        else {
            gameState[0].score += scoreTeamOne
            gameState[1].score += scoreTeamTwo
            gameState[2].score += scoreTeamThree
            currentRound += 1
            
            if (currentRound === 4) {
                const winner = gameState.sort((a,b) => b.score - a.score)
                console.log(winner)
                modalTarget.innerHTML = `
                <!-- Modal content -->
                <div class="modal-content">
                  <span class="close">&times;</span>
                  <p>Winner is ${winner[0].teamName}!</p>
                </div>`
                document.querySelector('.close').onclick = () =>  modalTarget.innerHTML = ''
                StartGameButton()

                gameState.forEach(score => updateScore(score))
            }

            else {
                renderGame(currentRound)
            }
        
        }
    }
})  
 
