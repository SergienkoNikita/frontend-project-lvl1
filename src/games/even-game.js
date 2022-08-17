import utils from '../globals/utils.js';
import CONSTANTS from '../globals/constants.js';

const GAME_RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const evenGame = {
  rules: GAME_RULES,

  generateCondition() {
    return utils.generateRandomNum();
  },

  calculateRightAnswer(condition) {
    return isEven(condition)
      ? CONSTANTS.ANSWER_VARIANTS.YES
      : CONSTANTS.ANSWER_VARIANTS.NO;
  },
};

export default evenGame;
