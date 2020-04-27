import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import { DisplayContext } from '../../contexts/DisplayContext';

function ClearPad() {
  const { dispatch } = useContext(DisplayContext);

  function handleClick() {
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
