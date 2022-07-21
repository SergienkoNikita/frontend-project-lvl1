import { getUserInput, writeMessage } from '../helpers.js';

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
