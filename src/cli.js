import { getUserInput, writeMessage } from './helpers.js';

export const initPlayer = () => {
  const defaultName = 'noname';
  writeMessage('Welcome to the Brain Games!');

  const name = getUserInput('May I have your name? ');

  if (!name) {
    writeMessage(`Ok, i'll call you ${defaultName}`);
    return defaultName;
  }

  return name;
};
