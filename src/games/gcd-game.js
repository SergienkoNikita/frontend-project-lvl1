import utils from '../globals/utils.js';

const GAME_RULES = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNum, secondNum) => {
  if (secondNum > firstNum) return getGCD(secondNum, firstNum);

  if (!secondNum) return firstNum;

  return getGCD(secondNum, firstNum % secondNum);
};

const GCDGame = {
  rules: GAME_RULES,

  generateCondition() {
    return `${utils.generateRandomNum()} ${utils.generateRandomNum()}`;
  },

  calculateRightAnswer(condition) {
    const [firstNum, secondNum] = condition
      .split(' ')
      .map((number) => Number(number));

    return String(getGCD(firstNum, secondNum));
  },
};

export default GCDGame;
