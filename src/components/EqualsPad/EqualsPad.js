import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import { DisplayContext } from '../../contexts/DisplayContext';

function EqualsPad() {
  const { dispatch } = useContext(DisplayContext);

  function handleClick() {
    dispatch({
      type: 'EQUALS',
    });
  }

  return (
    <Button outline color="secondary" id="equals" onClick={handleClick}>
      =
    </Button>
  );
}

export default EqualsPad;
