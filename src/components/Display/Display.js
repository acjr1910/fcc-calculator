import React, { useContext } from 'react';
import { DisplayContext } from '../../contexts/DisplayContext';

function Display() {
  const { display } = useContext(DisplayContext);
  return <div>curr value: {display}</div>;
}

export default Display;
