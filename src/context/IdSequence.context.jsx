import React, { createContext, useContext, useRef } from 'react';

const IdSequenceContext = createContext();

export const useNumericID = () => {
  return useContext(IdSequenceContext);
};

export const IdSequenceProvider = ({ children }) => {
  const latId = useRef(0);

  const generateID = () => {
    let id = latId.current + 1;
    latId.current = id;
    return id;
  };

  return (
    <IdSequenceContext.Provider value={generateID}>
      {children}
    </IdSequenceContext.Provider>
  );
};
