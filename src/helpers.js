import readlineSync from 'readline-sync';

const RANDOM_NUM_RANGE = 100;

export const writeMessage = (message = '') => {
  console.log(message);
};

export const getUserInput = (question = '') => readlineSync.question(question);

export const generateRandomNum = () => Math.floor(Math.random() * RANDOM_NUM_RANGE);

export const isEven = (number) => number % 2 === 0;
