import React, { useContext } from 'react';
import { DisplayContext } from '../../contexts/DisplayContext';
import { DecimalContext } from '../../contexts/DecimalContext';

import operatorAction from '../../actions/operator';

function OperatorPad({ id, label, operator }) {
  const { dispatch } = useContext(DisplayContext);
  const { setIsDecimalActive } = useContext(DecimalContext);

  function handleClick() {
    setIsDecimalActive(false);
    dispatch(operatorAction(id.toUpperCase(), label));
  }

  return (
    <button className="calculator__operatorpad" id={id} onClick={handleClick}>
      {label}
    </button>
  );
}

export default OperatorPad;
