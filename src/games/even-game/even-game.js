import { generateRandomNum } from '../../utils.js';
import { ANSWER_VARIANTS, GAME_RULES } from './constants.js';
import { Game } from '../game-model.js';
import { isEven } from './helpers.js';

class EvenGame extends Game {
  constructor() {
    super();
    this.rules = GAME_RULES;
  }

  generateCondition() {
    this.condition = generateRandomNum();
  }

  calculateRightAnswer() {
    this.rightAnswer = isEven(this.condition) ? ANSWER_VARIANTS.YES : ANSWER_VARIANTS.NO;
  }
}

export const evenGame = new EvenGame();
