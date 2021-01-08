import { updateTeam } from './TeamProvider.js'

const contentTarget = document.querySelector('.addTeamContainer')
const eventHub = document.querySelector('#container')

eventHub.addEventListener('click', clickEvent => {
    //This needs to construct a team object to send to the API using the name
    //that was entered by the user, and the date/timestamp the user clicked 'Create Team'
    if (clickEvent.target.id === 'newTeam') {
 
        const teamName = document.querySelector('#teamName');

        const newTeam = {
            name: teamName.value,
            creationDate: Date.now(),
            // THIS IS CHEATING - to be changed later
            players: 0,
            score: 0
        }

        //POST newTeam to the API
        updateTeam(newTeam);
        
    }

})

export const newTeamForm = () => {
    contentTarget.innerHTML = `
    <h3 class="addTeamHeader">New Team</h3>
    <form action="" method="post" class="addPlayerForm">
        <div class="teamNameForm">
            <input type="text" name="teamName" id="teamName" placeholder="Team name" required />
        </div>
    </form>
    <div class="teamNameSubmit">
        <button type="button" class="btn-submit" id="newTeam">Create Team</button>
    </div>
    `
}