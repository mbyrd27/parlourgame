export const Player = (player) => {
    return `
    <ul class="player__name">
        <li>${player.firstName} ${player.lastName}</li>
        <li>${player.team_id}</li>
    </ul>`
}