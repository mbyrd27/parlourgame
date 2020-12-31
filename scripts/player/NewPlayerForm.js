import { getTeams, useTeam } from '../team/TeamProvider.js'

const contentTarget = document.querySelector('.addPlayerContainer')
const eventHub = document.querySelector('#container')

const renderPlayerForm = currentTeams => {
    contentTarget.innerHTML = `
    <h3 class="addPlayerHeader">New Player</h3>
    <form action="" method="post" class="addPlayerForm">
        <div class="playerFirstNameForm playerForm">
            <input type="text" name="playerFirstName" id="playerFirstName" placeholder="First name" required />
        </div>
        <div class="playerLastNameForm playerForm">
            <input type="text" name="playerLastName" id="playerLastName" placeholder="Last name" required />
        </div>
        <div class="playerTeamSelect playerForm">
            <select class="teamDropdown" name="assignTeam" id="assignTeam">
                <option value="0">Please select a team...</option>
                ${
                    currentTeams.map(team => {
                        return `<option value="${team.name}">${team.name}</option>`
                    }).join('')
                }
            </select>
        </div>
        <div class="addPlayerSubmit">
            <input type="submit" value="Add Player to Team" class="btn-submit" id="newPlayer"/>
        </div>
    </form>
    `
}

export const TeamSelect = () => {
    getTeams().then(() => {
        const currentTeams = useTeam();
        renderPlayerForm(currentTeams);
    }) 
}

eventHub.addEventListener('teamStateChanged', TeamSelect)