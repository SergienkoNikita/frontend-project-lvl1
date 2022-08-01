import { getUserInput, writeMessage } from './utils.js';

class GameController {
  #playerName = '';

  #successRounds = 0;

  static successRoundsCountLimit = 3;

  static welcomeMessage = 'Welcome to the Brain Games!';

  constructor() {
    this.#initPlayer();
  }

  #initPlayer() {
    writeMessage(GameController.welcomeMessage);

    this.#playerName = getUserInput('May I have your name? ');

    writeMessage(`Hello, ${this.#playerName}!`);
  }

  initGame(Game) {
    if (!Game) return;
    Game.showRules();

    while (this.#successRounds < GameController.successRoundsCountLimit) {
      this.#handleRoundResult(Game.playRound());
    }

    this.#endGame();
  }

  #handleRoundResult({ rightAnswer, playerAnswer }) {
    if (rightAnswer === playerAnswer) {
      this.#onSuccess();
    } else {
      this.#onUnsuccess(rightAnswer, playerAnswer);
    }
  }

  #onSuccess() {
    this.#successRounds += 1;
    writeMessage('Correct!');
  }

  #onUnsuccess(rightAnswer, playerAnswer) {
    this.#successRounds = 0;
    writeMessage(
      `'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${this.#playerName}!`,
    );
  }

  #endGame() {
    writeMessage(`Congratulations, ${this.#playerName}!`);
  }
}

export const gameController = new GameController();
