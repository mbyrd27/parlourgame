import { getTeams, useTeam } from './TeamProvider.js'
import { newTeamForm } from './NewTeamForm.js'

const eventHub = document.querySelector('#container')
const contentTarget = document.querySelector('.teamList')

export const TeamList = addedTeam => {
    contentTarget.innerHTML = `<li class="teamList--header"><u>Name</u></li>
        ${addedTeam.map(team => {
            return `<li>${team.name}</li>`
            })
            .join('')
        }`
        
}

export const displayTeams = () => {
    getTeams().then(() => {
        const currentTeams = useTeam();
        TeamList(currentTeams);
        newTeamForm();
    }) 
}


eventHub.addEventListener('teamStateChanged', displayTeams);