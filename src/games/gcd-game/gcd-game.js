import { Game } from '../game-model.js';
import { GAME_RULES } from './constants.js';
import { generateRandomNum } from '../../utils.js';
import { getGCD } from './helpers.js';

class GCDGame extends Game {
  constructor() {
    super();
    this.rules = GAME_RULES;
  }

  generateCondition() {
    this.condition = `${generateRandomNum()} ${generateRandomNum()}`;
  }

  calculateRightAnswer() {
    const [firstNum, secondNum] = this.condition
      .split(' ')
      .map((number) => Number(number));

    this.rightAnswer = String(getGCD(firstNum, secondNum));
  }
}

export const gcdGame = new GCDGame();
