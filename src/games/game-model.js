import { getUserInput, writeMessage } from '../utils.js';

export class Game {
  userAnswer;

  rightAnswer;

  condition;

  rules;

  constructor() {
    this.userAnswer = '';
    this.rightAnswer = '';
  }

  playRound() {
    this.generateRoundData();
    this.dialogWithPlayer();
    return { rightAnswer: this.rightAnswer, playerAnswer: this.userAnswer };
  }

  generateRoundData() {
    this.generateCondition();
    this.calculateRightAnswer();
  }

  generateCondition() {
    return this;
  }

  calculateRightAnswer() {
    return this;
  }

  dialogWithPlayer() {
    writeMessage(`Question: ${this.condition}`);
    this.userAnswer = getUserInput('Your answer: ');
  }

  showRules() {
    writeMessage(this.rules);
  }
}
