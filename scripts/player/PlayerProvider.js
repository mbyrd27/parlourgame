const eventHub = document.querySelector('#container')
let players = []

const dispatchStateChangeEvent = () => {
    const addPlayerEvent = new CustomEvent('playerAdded')
    eventHub.dispatchEvent(addPlayerEvent)
}

export const getPlayers = () => {
    return fetch('http://localhost:8088/players')
        .then(response => response.json())
        .then(parsedPlayers => players = parsedPlayers)
}

export const updatePlayers = player => {
    return fetch('http://localhost:8088/players', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(player)
    })
    .then(getPlayers)
    .then(dispatchStateChangeEvent)
}

export const usePlayers = () => {
    return players.slice();
}
