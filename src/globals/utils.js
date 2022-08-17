import readlineSync from 'readline-sync';

const RANDOM_NUM_RANGE = 100;

export default {
  getUserInput(question = '') {
    return readlineSync.question(question);
  },

  generateRandomNum(endRange = RANDOM_NUM_RANGE, startRange = 0) {
    return Math.floor(Math.random() * (endRange - startRange)) + startRange;
  },

  writeMessage(message = '') {
    console.log(message);
  },
};
