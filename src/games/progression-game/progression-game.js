import { Game } from '../game-model.js';
import { GAME_RULES, HIDDEN_NUM_SYMBOL } from './constants.js';
import { generateRandomNum } from '../../utils.js';

class ProgressionGame extends Game {
  progression;

  progressionStep;

  progressionLengthLimit;

  constructor() {
    super();
    this.rules = GAME_RULES;
    this.initProgressionData();
  }

  generateRoundData() {
    this.initProgressionData();
    super.generateRoundData();
  }

  generateProgression() {
    const startProgressionNum = generateRandomNum(10);
    this.progression.push(startProgressionNum);

    for (let i = 1; i < this.progressionLengthLimit; i += 1) {
      const nextNumForProgression = this.progression[i - 1] + this.progressionStep;
      this.progression.push(nextNumForProgression);
    }
  }

  generateCondition() {
    this.generateProgression();

    const condition = [...this.progression];
    condition[generateRandomNum(this.progressionLengthLimit) - 2] = HIDDEN_NUM_SYMBOL;
    this.condition = condition.join(' ');
  }

  calculateRightAnswer() {
    const indexOfHiddenNum = this.condition.split(' ').indexOf(HIDDEN_NUM_SYMBOL);
    this.rightAnswer = String(this.progression[indexOfHiddenNum]);
  }

  initProgressionData() {
    this.progression = [];
    this.progressionLengthLimit = generateRandomNum(15, 5);
    this.progressionStep = generateRandomNum(10, 2);
  }
}

export const progressionGame = new ProgressionGame();
