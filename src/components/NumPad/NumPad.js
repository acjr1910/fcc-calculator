import React, { useContext } from 'react';

import { DisplayContext } from '../../contexts/DisplayContext';

import numberAction from '../../actions/number';
import { NUMBER } from '../../constants/number';

function NumPad({ id, label }) {
  const { dispatch } = useContext(DisplayContext);

  function handleClick() {
    dispatch(numberAction(NUMBER, label));
  }

  return (
    <button className="calculator__numpad" id={id} onClick={handleClick}>
      {label}
    </button>
  );
}

export default NumPad;
