'use strict';

function getNum(num) {
  if (typeof num !== 'number' || Number.isNaN(num)) return NaN;
  if (num < 1 || num > number || num === null) return null;
  if (num === 1) return 1;

  if (num !== null && getNum(num - 5) !== null) {
    return `(${getNum(num - 5)} + 5)`;
  }

  if (num % 3 === 0 && getNum(num / 3) !== null) {
    return `${getNum(num / 3)} * 3`;
  }

  return null;
}

const number = 13;
const resultingEquation = getNum(number);
if (Number.isNaN(resultingEquation)) {
  console.log('Type error!');
} else if (resultingEquation === null || resultingEquation === 1) {
  console.log('Error!');
} else {
  console.log(`${number}: ${resultingEquation}`);
}
