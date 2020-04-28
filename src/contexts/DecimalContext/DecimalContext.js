import React, { useState } from 'react';

const DecimalContext = React.createContext();

function DecimalContextProvider({ children }) {
  const [isDecimalActive, setIsDecimalActive] = useState(false);

  return (
    <DecimalContext.Provider
      value={{
        isDecimalActive,
        setIsDecimalActive,
      }}
    >
      {children}
    </DecimalContext.Provider>
  );
}

export { DecimalContextProvider, DecimalContext };
