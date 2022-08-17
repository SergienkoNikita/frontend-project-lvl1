import utils from '../globals/utils.js';
import CONSTANTS from '../globals/constants.js';

const GAME_RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return number > 2;
};

const primeGame = {
  rules: GAME_RULES,

  generateCondition() {
    return utils.generateRandomNum();
  },

  calculateRightAnswer(condition) {
    return isPrime(condition)
      ? CONSTANTS.ANSWER_VARIANTS.YES
      : CONSTANTS.ANSWER_VARIANTS.NO;
  },
};

export default primeGame;
