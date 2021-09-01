import React, { useState, createContext } from 'react';

export const LenguajeContext = createContext();

export const LenguajeProvider = (props) => {
  const [english, setEnglish] = useState(false)

  return (
    <LenguajeContext.Provider value={[english, setEnglish]}>
      {props.children}
    </LenguajeContext.Provider>
  );
}