import { Game } from '../game-model.js';
import { GAME_RULES, ANSWER_VARIANTS } from './constants.js';
import { generateRandomNum } from '../../utils.js';
import { isPrime } from './helpers.js';

class PrimeGame extends Game {
  constructor() {
    super();
    this.rules = GAME_RULES;
  }

  generateCondition() {
    this.condition = generateRandomNum();
  }

  calculateRightAnswer() {
    this.rightAnswer = isPrime(this.condition) ? ANSWER_VARIANTS.YES : ANSWER_VARIANTS.NO;
  }
}

export const primeGame = new PrimeGame();
