import React, { useContext } from 'react';
import { DisplayContext } from '../../contexts/DisplayContext';
import { DecimalContext } from '../../contexts/DecimalContext';
import decimalAction from '../../actions/decimal';

function DecimalPad() {
  const { dispatch } = useContext(DisplayContext);
  const { isDecimalActive, setIsDecimalActive } = useContext(DecimalContext);

  function handleClick() {
    if (!isDecimalActive) {
      setIsDecimalActive(true);
      dispatch(decimalAction('DECIMAL'));
    }
  }

  return (
    <button
      className="calculator__decimalpad"
      id="decimal"
      onClick={handleClick}
    >
      .
    </button>
  );
}

export default DecimalPad;
