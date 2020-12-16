import { Player } from './Player.js'
import { gamePlayers } from './PlayerProvider.js'

const contentTarget = document.querySelector(".players");

export const renderPlayers = () => {
    let players = gamePlayers();
    contentTarget.innerHTML += players.map(player => {
        return Player(player);
    }).join('');
}