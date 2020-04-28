import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { DisplayContextProvider } from '../../contexts/DisplayContext';
import { DecimalContextProvider } from '../../contexts/DecimalContext';
import Display from '../Display';
import NumPad from '../NumPad';
import DecimalPad from '../DecimalPad';
import EqualsPad from '../EqualsPad';
import ClearPad from '../ClearPad';
import OperatorPad from '../OperatorPad';

import numPadsData from '../../utils/numPads';
import operatorPadsData from '../../utils/operatorPads';

import { Wrapper } from './styles';

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
        <DecimalContextProvider>
          <Wrapper className="calculator">
            <div className="calculator__display">
              <Display />
            </div>
            <div className="calculator__leftpads">
              {numPads}
              <DecimalPad />
              <EqualsPad />
            </div>
            <div className="calculator__rightpads">
              <ClearPad />
              {operatorPads}
            </div>
          </Wrapper>
        </DecimalContextProvider>
      </DisplayContextProvider>
    </ErrorBoundary>
  );
}

export default App;
