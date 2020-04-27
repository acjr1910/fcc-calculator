export default function calculateString(string) {
  if (typeof string == 'string') {
    const splittedString = string
      .replace('x', '*')
      .replace(':', '/')
      .split(' ');

    let parsedNumbers = [];

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

    let finalOutput = [];

    let operator = 0;

    for (let i = 0; i < parsedNumbers.length; i++) {
      const curr = parsedNumbers[i];

      if (operator == 1 && isNaN(curr)) {
        finalOutput[i - 1] = curr;
      } else {
        finalOutput.push(curr);
        operator = 0;
      }

      if (isNaN(curr)) {
        operator = 1;
      }
    }
    return finalOutput.join(' ');
  }
  return '0';
}
