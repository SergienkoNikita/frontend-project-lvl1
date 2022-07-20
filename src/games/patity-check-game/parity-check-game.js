import { initPlayer } from '../../cli.js';
import {
  generateRandomNum, getUserInput, isEven, writeMessage,
} from '../../helpers.js';
import { ANSWER_VARIANTS, GAME_RULES, RIGHT_ANSWERS_TO_WIN } from './constants.js';

export const ParityCheckGame = {
  playerName: '',

  init() {
    this.playerName = initPlayer();
    console.log(this.playerName);
    writeMessage(GAME_RULES);
    this.initGame();
  },

  initGame(playerName) {
    let userRightAnswersCounter = 0;

    while (userRightAnswersCounter < RIGHT_ANSWERS_TO_WIN) {
      const result = this.playGame();

      userRightAnswersCounter = result ? userRightAnswersCounter + 1 : 0;
    }

    this.endGame(playerName);
  },

  endGame() {
    writeMessage(`Congratulations, ${this.playerName}!`);
  },

  playGame() {
    const numberToCheck = generateRandomNum();
    const rightAnswer = isEven(numberToCheck) ? ANSWER_VARIANTS.YES : ANSWER_VARIANTS.NO;
    writeMessage(`Question: ${numberToCheck}`);
    const userAnswer = getUserInput('Your answer: ');

    if (userAnswer === rightAnswer) {
      writeMessage('Correct!');
    } else {
      writeMessage(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    }

    return userAnswer === rightAnswer;
  },
};
