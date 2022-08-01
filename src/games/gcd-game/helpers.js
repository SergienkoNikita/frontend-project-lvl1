export const getGCD = (firstNum, secondNum) => {
  if (secondNum > firstNum) return getGCD(secondNum, firstNum);

  if (!secondNum) return firstNum;

  return getGCD(secondNum, firstNum % secondNum);
};
