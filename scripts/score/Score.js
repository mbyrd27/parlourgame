export const Score = (score) => {
    return `
    <ul class="score__name">
        <li>Team ID: ${score.team_id}</li>
        <li>Score: ${score.score}</li>
        <li>Date: ${score.game_date}</li>
    </ul>`
}