import React from 'react';
import { DisplayContextProvider } from '../../contexts/DisplayContext';
import Display from '../Display';
import NumPad from '../NumPad';
import DecimalPad from '../DecimalPad';
import EqualsPad from '../EqualsPad';
import ClearPad from '../ClearPad';
import OperatorPad from '../OperatorPad';

import numPadsData from '../../utils/numPads';
import operatorPadsData from '../../utils/operatorPads';

import './styles.css';

function App() {
  const numPads = numPadsData.reverse().map((numPad) => {
    return <NumPad id={numPad.id} label={numPad.value} />;
  });

  const operatorPads = operatorPadsData.reverse().map((operatorPad) => {
    return (
      <OperatorPad
        id={operatorPad.id}
        label={operatorPad.value}
        operator={operatorPad.operator}
      />
    );
  });

  return (
    <DisplayContextProvider>
      <div className="calculator">
        <div>
          <Display />
          {numPads}
          <DecimalPad />
          <EqualsPad />
        </div>
        <div>
          <ClearPad />
          {operatorPads}
        </div>
      </div>
    </DisplayContextProvider>
  );
}

export default App;
