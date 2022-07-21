import { Game } from '../game-model.js';
import { GAME_RULES, MATH_SYMBOLS } from './constants.js';
import { calculateMathExpression, generateRandomNum } from '../../helpers.js';

const generateMatExpression = () => {
  const mathSymbol = MATH_SYMBOLS[generateRandomNum(3)];
  const firstNumber = generateRandomNum();
  const secondNumber = generateRandomNum();

  return [firstNumber, mathSymbol, secondNumber].join(' ');
};

class CalcGame extends Game {
  constructor() {
    super();
    this.rules = GAME_RULES;
  }

  generateRoundData() {
    this.condition = generateMatExpression();
    this.rightAnswer = String(calculateMathExpression(this.condition));
  }
}

export const calcGame = new CalcGame();
