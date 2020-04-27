import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import { DisplayContext } from '../../contexts/DisplayContext';

function DecimalPad() {
  const { dispatch } = useContext(DisplayContext);

  function handleClick() {
    dispatch({
      type: 'DECIMAL',
    });
  }

  return (
    <Button outline color="secondary" id="decimal" onClick={handleClick}>
      .
    </Button>
  );
}

export default DecimalPad;
