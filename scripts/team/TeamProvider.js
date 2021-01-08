const eventHub = document.querySelector('#container')
let team = []

//Dispatch to the event hub the fact that the Team state has changed
const dispatchStateChangeEvent = () => {
    const teamStateChangedEvent = new CustomEvent('teamStateChanged')
    eventHub.dispatchEvent(teamStateChangedEvent)
}

//Get the team array from the API in its current state
export const getTeams = () => {
    return fetch('http://localhost:8088/teams')
        .then(response => response.json())
        .then(parsedTeams => {
            team = parsedTeams;
        })
}

//Push a new team up to the API
export const updateTeam = team => {
    return fetch('http://localhost:8088/teams', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(team)
    })
    .then(getTeams)
    .then(dispatchStateChangeEvent)
}

export const useTeam = () => {
    return team.slice();
}