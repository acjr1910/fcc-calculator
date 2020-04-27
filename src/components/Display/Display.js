import React, { useContext } from 'react';
import { DisplayContext } from '../../contexts/DisplayContext';

function Display() {
  const { state } = useContext(DisplayContext);
  return <div id="display">{state}</div>;
}

export default Display;
