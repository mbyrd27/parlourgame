const players = [
    {
        firstName: "Jerry",
        lastName: "Johnson",
        country: "USA",
        teamName: "The Knights",
        team_id: 1
    },

    {
        firstName: "Tina",
        lastName: "Scoober",
        country: "Canada",
        teamName: "Pink Fury",
        team_id: 4
    },

    {
        firstName: "Dolph",
        lastName: "Holmscomb",
        country: "Norway", 
        teamName: "Green Machine",
        team_id: 3
    },

    {
        firstName: "Igor",
        lastName: "Lebedev",
        country: "Russia",
        teamName: "The Barons",
        team_id: 2
    }
]

export const gamePlayers = () => {
    return players.slice();
}