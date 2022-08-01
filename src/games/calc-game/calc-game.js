import { Game } from '../game-model.js';
import { GAME_RULES, MATH_SYMBOLS } from './constants.js';
import { generateRandomNum } from '../../utils.js';

class CalcGame extends Game {
  constructor() {
    super();
    this.rules = GAME_RULES;
  }

  generateCondition() {
    const mathSymbol = MATH_SYMBOLS[generateRandomNum(3)];
    const firstNumber = generateRandomNum();
    const secondNumber = generateRandomNum();

    this.condition = [firstNumber, mathSymbol, secondNumber].join(' ');
  }

  calculateRightAnswer() {
    // eslint-disable-next-line no-eval
    this.rightAnswer = String(eval(this.condition));
  }
}

export const calcGame = new CalcGame();
