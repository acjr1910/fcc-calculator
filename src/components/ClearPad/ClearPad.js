import React, { useContext } from 'react';
import { DisplayContext } from '../../contexts/DisplayContext';
import { DecimalContext } from '../../contexts/DecimalContext';

function ClearPad() {
  const { dispatch } = useContext(DisplayContext);
  const { setIsDecimalActive } = useContext(DecimalContext);

  function handleClick() {
    setIsDecimalActive(false);
    dispatch({
      type: 'CLEAR',
    });
  }

  return (
    <button className="calculator__clearpad" id="clear" onClick={handleClick}>
      AC
    </button>
  );
}

export default ClearPad;
