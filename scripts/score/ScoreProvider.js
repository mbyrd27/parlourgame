const score = [
    {
        teamName: "The Knights",
        team_id: 1,
        score: 40,
        game_date: "12/16/2020"
    },

    {
        teamName: "Pink Fury",
        team_id: 4,
        score: 51,
        game_date: "11/11/2020"
    },

    {
        teamName: "Team 7",
        team_id: 6,
        score: 44,
        game_date: "11/26/2020"
    },

    {
        teamName: "The Wizards",
        team_id: 7,
        score: 22,
        game_date: "12/1/2020"
    }

]

export const scoreBoard = () => {
    return score.slice();
}