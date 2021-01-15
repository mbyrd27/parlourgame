let score = []
const eventHub = document.querySelector('#container')

const dispatchStateChangeEvent = () => {
    const scoreStateChangedEvent = new CustomEvent('scoreAdded')
    eventHub.dispatchEvent(scoreStateChangedEvent)
}

export const getScore = () => {
    return fetch('http://localhost:8088/teamScores')
        .then(response => response.json())
        .then(parsedScores => score = parsedScores)
}

export const useScore = () => {
    return score.slice();
}

export const updateScore = score => {
    return fetch('http://localhost:8088/teamScores', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(score)
    })
    .then(getScore)
    .then(dispatchStateChangeEvent)
}