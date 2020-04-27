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
      return state.length < 1
        ? `${action.payload}`
        : `${state}${action.payload}`;
    case 'DECIMAL':
      return `${state}.`;
    case 'CLEAR':
      return '';
    case 'EQUALS':
      console.log('EQUALS :D');
      return state;
    default:
      return state;
  }
}

export default DisplayReducer;
