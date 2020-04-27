import React, { useContext } from 'react';
import { Button } from 'reactstrap';

import { DisplayContext } from '../../contexts/DisplayContext';

function NumPad({ id, label }) {
  const { dispatch } = useContext(DisplayContext);

  function handleClick() {
    dispatch({
      type: 'NUMBER',
      payload: label,
    });
  }

  return (
    <Button outline color="secondary" id={id} onClick={handleClick}>
      {label}
    </Button>
  );
}

export default NumPad;
