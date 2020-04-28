import React, { useContext } from 'react';
import { Button } from 'reactstrap';
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
    <Button outline color="secondary" id="decimal" onClick={handleClick}>
      .
    </Button>
  );
}

export default DecimalPad;
