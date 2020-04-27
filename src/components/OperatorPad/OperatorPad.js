import React, { useContext } from 'react';
import { Button } from 'reactstrap';
import { DisplayContext } from '../../contexts/DisplayContext';

import operatorAction from '../../actions/operator';

function OperatorPad({ id, label, operator }) {
  const { dispatch } = useContext(DisplayContext);

  function handleClick() {
    dispatch(operatorAction(id.toUpperCase(), label));
  }

  return (
    <Button outline color="primary" id={id} onClick={handleClick}>
      {label}
    </Button>
  );
}

export default OperatorPad;
