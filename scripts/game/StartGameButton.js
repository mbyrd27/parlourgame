const contentTarget = document.querySelector('.gameBoard')
const eventHub = document.querySelector('#container')

export const StartGameButton = () => {
    contentTarget.innerHTML = `<button type="button" class="btn-submit" id="startGame">Start Game</button>`
}

eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.id === 'startGame') {
        const gameStartedEvent = new CustomEvent('beginGame')
        eventHub.dispatchEvent(gameStartedEvent)
        }
    }
)