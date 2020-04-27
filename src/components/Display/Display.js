import React, { useContext } from 'react';
import { DisplayContext } from '../../contexts/DisplayContext';

function Display() {
  const { state } = useContext(DisplayContext);
  console.log('display state', state);
  return <div>curr value: {state}</div>;
}

export default Display;
