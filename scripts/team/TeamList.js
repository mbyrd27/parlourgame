import { Team } from './Team.js'
import { teamList } from './TeamProvider.js'

const contentTarget = document.querySelector('#container');

export const renderTeams = () => {
    let teams = teamList();
    contentTarget.innerHTML += teams.map(team => {
        return Team(team)
    }).join('');
}