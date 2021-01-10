const eventHub = document.querySelector('#container')
const contentTarget = document.querySelector('.gameBoard')

eventHub.addEventListener('gameReady', event => {
    contentTarget.innerHTML = `<form>
    <label for="${event.detail[0]}">${event.detail[0]}</label>
    <input type="text" id="scoreTeam1" name="${event.detail[0]}">
    <label for="${event.detail[1]}">${event.detail[1]}</label>
    <input type="text" id="scoreTeam2" name="${event.detail[1]}">
    <label for="${event.detail[2]}">${event.detail[2]}</label>
    <input type="text" id="scoreTeam3" name="${event.detail[2]}">
    <button type="button" class="btn-submit" name="recordScores">Save Round Scores</button>
    `
})
