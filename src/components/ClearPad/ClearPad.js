import React, { useContext } from 'react';
import { Button } from 'reactstrap';
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
    <Button outline color="primary" id="clear" onClick={handleClick}>
      Clear pad
    </Button>
  );
}

export default ClearPad;
