import React, { useState } from 'react';

const DisplayContext = React.createContext();

function DisplayContextProvider({ children }) {
  const [display, setDisplay] = useState('');

  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      {children}
    </DisplayContext.Provider>
  );
}

export { DisplayContextProvider, DisplayContext };
