import React, { useContext } from 'react';
import { DisplayContext } from '../../contexts/DisplayContext';

function EqualsPad() {
  const { state, dispatch } = useContext(DisplayContext);

  function handleClick() {
    if (typeof state == 'string') {
      const actualState = state.trim();
      const lastChar = actualState[actualState.length - 1];
      if (isNaN(lastChar)) {
        return dispatch({
          type: 'EMPTY-EQUALS',
        });
      }
    }
    dispatch({
      type: 'EQUALS',
    });
  }

  return (
    <button className="calculator__equalspad" id="equals" onClick={handleClick}>
      =
    </button>
  );
}

export default EqualsPad;
