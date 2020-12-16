const team = [
    {
        id: 1,
        name: "The Knights",
        creationDate: "12/4/1663"
    },

    {
        id: 2,
        name: "The Barons",
        creationDate: "5/12/1700"
    },

    {
        id: 3,
        name: "Green Machine",
        creationDate: "8/8/1844"
    },

    {
        id: 4,
        name: "Pink Fury",
        creationDate: "9/27/2018"
    },

    {
        id: 5,
        name: "Road Warriors",
        creationDate: "4/15/1992"
    }, 

    {
        id: 6,
        name: "Team 7",
        creationDate: "1/7/1944"
    }, 

    {
        id: 7,
        name: "The Wizards",
        creationDate: "4/19/2000"
    }
]

export const teamList = () => {
    return team.slice();
}