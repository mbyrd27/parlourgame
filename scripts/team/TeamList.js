import { getTeams, useTeam } from './TeamProvider.js'
import { getScore, useScore } from '../score/ScoreProvider.js'
import { newTeamForm } from './NewTeamForm.js'

const eventHub = document.querySelector('#container')
const teamTarget = document.querySelector('.teamList')
const scoreTarget = document.querySelector('.scoreList')

// OLD
export const TeamList = (addedTeam, scores) => {
    teamTarget.innerHTML = `<li class="teamList--header"><u>Name</u></li>
        ${
            addedTeam.map(team => {
                return `<li>${team.name}</li>`
                })
                .join('')
        }`
    scoreTarget.innerHTML = `<li class=scoreList--header"><u>Score</u></li>
        ${
            addedTeam.map(team => {
                const scoreList = scores.filter(score => team.id === score.teamId)
                const sum = scoreList.map(s => s.score).reduce((a,b) => a + b, 0)
                return `<li>${sum}</li>`
            }).join('')
        }`
}



export const displayTeams = () => {
    getTeams()
        .then(getScore)
        .then(() => {
            const currentTeams = useTeam();
            const scores = useScore();
            console.log(scores)
            TeamList(currentTeams, scores);
            newTeamForm();
    }) 
}


eventHub.addEventListener('teamStateChanged', displayTeams);
eventHub.addEventListener('scoreAdded', displayTeams);