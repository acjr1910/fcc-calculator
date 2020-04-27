import React, { useContext } from 'react';
import { Button } from 'reactstrap';

import { DisplayContext } from '../../contexts/DisplayContext';

import numberAction from '../../actions/number';
import { NUMBER } from '../../constants/number';

function NumPad({ id, label }) {
  const { dispatch } = useContext(DisplayContext);

  function handleClick() {
    dispatch(numberAction(NUMBER, label));
  }

  return (
    <Button outline color="secondary" id={id} onClick={handleClick}>
      {label}
    </Button>
  );
}

export default NumPad;
