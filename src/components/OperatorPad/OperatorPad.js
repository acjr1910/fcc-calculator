import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import { DisplayContext } from '../../contexts/DisplayContext';

function OperatorPad({ id, label, operator }) {
  const { dispatch } = useContext(DisplayContext);

  function handleClick() {
    dispatch({
      type: id.toUpperCase(),
      payload: label,
    });
  }

  return (
    <Button outline color="primary" id={id} onClick={handleClick}>
      {label}
    </Button>
  );
}

export default OperatorPad;
