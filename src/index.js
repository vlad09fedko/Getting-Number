'use strict';

function getNum(num) {
  if (typeof num !== 'number' || Number.isNaN(num) || num < 1) return null;
  if (num === 1) return 1;

  if (getNum(num - 5) !== null) {
    return `(${getNum(num - 5)} + 5)`;
  }

  if (getNum(num / 3) !== null) {
    return `${getNum(num / 3)} * 3`;
  }

  return null;
}

const number = 13;
const resultingEquation = getNum(number);
if (resultingEquation === null || resultingEquation === 1) {
  console.log('Error!');
} else {
  console.log(`${number}: ${resultingEquation}`);
}
