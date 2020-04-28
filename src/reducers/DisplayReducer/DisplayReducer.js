// import stringCalculator from 'string-calculator';
import calculateString from '../../utils/calculateString';

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
      // eslint-disable-next-line eqeqeq
      if (state == 0) {
        return action.payload;
      }
      return state.length < 1
        ? `${action.payload}`
        : `${state}${action.payload}`;
    case 'DECIMAL':
      return `${state}.`;
    case 'CLEAR':
      return '0';
    case 'EQUALS':
      // eslint-disable-next-line no-eval
      return eval(calculateString(state));
    default:
      return state;
  }
}

export default DisplayReducer;
