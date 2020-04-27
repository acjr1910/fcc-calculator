import React, { useReducer } from 'react';
import DisplayReducer from '../../reducers/DisplayReducer';

const DisplayContext = React.createContext();

function DisplayContextProvider({ children }) {
  const initialState = '';

  const [state, dispatch] = useReducer(DisplayReducer, initialState);

  return (
    <DisplayContext.Provider value={{ state, dispatch }}>
      {children}
    </DisplayContext.Provider>
  );
}

export { DisplayContextProvider, DisplayContext };
