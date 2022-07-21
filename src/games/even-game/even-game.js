import {
  generateRandomNum, isEven,
} from '../../helpers.js';
import { ANSWER_VARIANTS, GAME_RULES } from './constants.js';
import { Game } from '../game-model.js';

class EvenGame extends Game {
  constructor() {
    super();
    this.rules = GAME_RULES;
  }

  generateRoundData() {
    this.condition = generateRandomNum();
    this.rightAnswer = isEven(this.condition) ? ANSWER_VARIANTS.YES : ANSWER_VARIANTS.NO;
  }
}

export const evenGame = new EvenGame();
