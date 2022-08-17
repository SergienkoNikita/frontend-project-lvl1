import utils from '../globals/utils.js';

const GAME_RULES = 'What is the result of the expression?';

const MATH_SYMBOLS = Object.freeze(['*', '+', '-']);

const calcGame = {
  rules: GAME_RULES,

  generateCondition() {
    const mathSymbol = MATH_SYMBOLS[utils.generateRandomNum(3)];
    const firstNumber = utils.generateRandomNum();
    const secondNumber = utils.generateRandomNum();

    return [firstNumber, mathSymbol, secondNumber].join(' ');
  },

  calculateRightAnswer(condition) {
    // eslint-disable-next-line no-eval
    return String(eval(condition));
  },
};

export default calcGame;
