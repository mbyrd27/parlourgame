import { renderGame } from "./score/ScoreList"

eventHub.addEventListener('click', e => {
    if (e.target.id === 'recordScores') {
        let scoreTeamOne = parseInt(document.querySelector(`#team--${gameState[0].teamId}`).value)
        let scoreTeamTwo = parseInt(document.querySelector(`#team--${gameState[1].teamId}`).value)
        let scoreTeamThree = parseInt(document.querySelector(`#team--${gameState[2].teamId}`).value)
        let checkTotal = roundTotal(scoreTeamOne, scoreTeamTwo, scoreTeamThree)
        //console.log(checkTotal)
        if (checkTotal !== 3) {
            //show popup that says to try again
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
                modalTarget.innerHTML = `
                <!-- Modal content -->
                <div class="modal-content">
                  <span class="close">&times;</span>
                  <p>Winner is ${winner}!</p>
                </div>`
                document.querySelector('.close').onclick = () =>  modalTarget.innerHTML = ''
                StartGameButton()
            }

            else {
                renderGame(currentRound)
            }
        
        }
    }
})     
            