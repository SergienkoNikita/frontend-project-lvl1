import utils from '../globals/utils.js';

const GAME_RULES = 'What number is missing in the progression?';

const HIDDEN_NUM_SYMBOL = '..';

const progressionGame = {
  rules: GAME_RULES,

  generateCondition() {
    const progression = [];
    const progressionLengthLimit = utils.generateRandomNum(15, 5);
    const progressionStep = utils.generateRandomNum(10, 2);

    const startProgressionNum = utils.generateRandomNum(10);
    progression.push(startProgressionNum);

    for (let i = 1; i < progressionLengthLimit; i += 1) {
      const nextNumForProgression = progression[i - 1] + progressionStep;
      progression.push(nextNumForProgression);
    }

    const condition = [...progression];
    const randomIndex = utils.generateRandomNum(progressionLengthLimit - 1, 1) - 1;
    condition[randomIndex] = HIDDEN_NUM_SYMBOL;
    return condition.join(' ');
  },

  calculateRightAnswer(condition) {
    const indexOfHiddenNum = condition.split(' ').indexOf(HIDDEN_NUM_SYMBOL);
    const conditionArray = indexOfHiddenNum < (condition.split(' ').length / 2)
      ? condition.split(' ').slice(indexOfHiddenNum + 1)
      : condition.split(' ').slice(0, indexOfHiddenNum - 1);

    const step = Number(conditionArray[1]) - Number(conditionArray[0]);
    return String(Number(condition.split(' ')[indexOfHiddenNum - 1]) + step);
  },
};

export default progressionGame;
