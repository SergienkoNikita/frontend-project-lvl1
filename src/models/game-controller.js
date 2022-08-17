import utils from '../globals/utils.js';
import gameModel from './game-model.js';

function GameController(Game = null) {
  let playerName = '';

  let successRounds = 0;

  let looseGame = false;

  const successRoundsCountLimit = 3;

  const welcomeMessage = 'Welcome to the Brain Games!';

  const initPlayer = () => {
    utils.writeMessage(welcomeMessage);

    playerName = utils.getUserInput('May I have your name? ');

    utils.writeMessage(`Hello, ${playerName}!`);
  };

  const onSuccess = () => {
    successRounds += 1;
    utils.writeMessage('Correct!');
  };

  const onUnsuccess = (rightAnswer, playerAnswer) => {
    successRounds = 0;
    looseGame = true;

    utils.writeMessage(
      `'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`,
    );
  };

  const handleRoundResult = ({ rightAnswer, playerAnswer }) => {
    if (rightAnswer === playerAnswer) {
      onSuccess();
    } else {
      onUnsuccess(rightAnswer, playerAnswer);
    }
  };

  const endGame = () => {
    const finalMessage = looseGame
      ? `Let's try again, ${playerName}!`
      : `Congratulations, ${playerName}!`;
    utils.writeMessage(finalMessage);
  };

  const initGame = (game) => {
    if (!game) return;
    gameModel.showRules(game);

    while (successRounds < successRoundsCountLimit && !looseGame) {
      handleRoundResult(gameModel.playRound(game));
    }

    endGame();
  };

  initPlayer();
  initGame(Game);
}

export default GameController;
