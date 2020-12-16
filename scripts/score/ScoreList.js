import { scoreBoard } from './ScoreProvider.js'
import { Score } from './Score.js'

const contentTarget = document.querySelector('.scores');

export const renderScores = () => {
    let scoreList = scoreBoard();
    contentTarget.innerHTML += scoreList.map(score => {
        return Score(score);
    }).join('');
}