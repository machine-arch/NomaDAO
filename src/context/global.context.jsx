import React, { createContext, useReducer } from 'react';

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const initialState = {
    persist: false,
    config: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_CONFIG':
        return {
          ...state,
          config: action.payload,
        };

      case 'SET_PERIST':
        return {
          ...state,
          persist: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
