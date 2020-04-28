/* eslint-disable eqeqeq */
export default function calculateString(string) {
  if (typeof string == 'string') {
    const splittedString = string
      .replace('x', '*')
      .replace(':', '/')
      .replace('÷', '/')
      .split(' ');

    let parsedNumbers = [];
    let finalOutput = [];
    let isOperator = 0;

    for (let i = 0; i < splittedString.length; i++) {
      const curr = splittedString[i];
      if (curr.length) {
        if (!isNaN(curr)) {
          parsedNumbers.push(parseFloat(splittedString[i]));
        } else {
          parsedNumbers.push(curr);
        }
      }
    }

    for (let i = 0; i < parsedNumbers.length; i++) {
      const currentValue = parsedNumbers[i];

      if (isOperator && currentValue == '-') {
        finalOutput.push(currentValue);
      } else if (isOperator && isNaN(currentValue)) {
        finalOutput[i - 1] = currentValue;
        if (currentValue != '-' && isNaN(finalOutput[i - 2])) {
          finalOutput[i - 2] = '';
        }
      } else {
        finalOutput.push(currentValue);
        isOperator = 0;
      }

      if (isNaN(currentValue)) {
        isOperator = 1;
      }
    }

    return finalOutput.join(' ');
  }
  return '0';
}
