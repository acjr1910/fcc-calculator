import React, { useContext } from 'react';
import { DisplayContext } from '../../contexts/DisplayContext';

function EqualsPad() {
  const { dispatch } = useContext(DisplayContext);

  function handleClick() {
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
