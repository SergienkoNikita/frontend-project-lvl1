import readlineSync from 'readline-sync';

const RANDOM_NUM_RANGE = 100;

export const writeMessage = (message = '') => {
  console.log(message);
};

export const getUserInput = (question = '') => readlineSync.question(question);

export const generateRandomNum = (range = RANDOM_NUM_RANGE) => Math.floor(Math.random() * range);
