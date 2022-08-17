import utils from '../globals/utils.js';

const gameModel = {
  showRules(game) {
    utils.writeMessage(game.rules);
  },

  playRound(game) {
    let userAnswer = '';
    let rightAnswer = '';
    let condition = '';

    condition = game.generateCondition();
    rightAnswer = game.calculateRightAnswer(condition);

    utils.writeMessage(`Question: ${condition}`);
    userAnswer = utils.getUserInput('Your answer: ');

    return { rightAnswer, playerAnswer: userAnswer };
  },
};

export default gameModel;
