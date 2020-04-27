// import stringCalculator from 'string-calculator';
import calculateString from '../../utils/calculateString';

let lastInputNumber;

function DisplayReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return ` ${state} ${action.payload} `;
    case 'SUBTRACT':
      return ` ${state} ${action.payload} `;
    case 'MULTIPLY':
      return ` ${state} ${action.payload} `;
    case 'DIVIDE':
      return ` ${state} ${action.payload} `;
    case 'NUMBER':
      lastInputNumber = action.payload;
      if (state == 0) {
        return action.payload;
      }
      return state.length < 1
        ? `${action.payload}`
        : `${state}${action.payload}`;
    case 'DECIMAL':
      // Fix here
      const doubleDecimal = lastInputNumber === state[state.length - 1];
      return doubleDecimal ? state : `${state}.`;
    case 'CLEAR':
      return '0';
    case 'EQUALS':
      return eval(calculateString(state));
    default:
      return state;
  }
}

export default DisplayReducer;
