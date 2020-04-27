import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
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
    return <NumPad key={numPad.id} id={numPad.id} label={numPad.value} />;
  });

  const operatorPads = operatorPadsData.reverse().map((operatorPad) => {
    return (
      <OperatorPad
        key={operatorPad.id}
        id={operatorPad.id}
        label={operatorPad.value}
        operator={operatorPad.operator}
      />
    );
  });

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
