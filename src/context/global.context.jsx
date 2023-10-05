import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const initialState = {
    activePageName: "",
    config: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_CONFIG":
        return {
          ...state,
          config: action.payload,
        };

      case "SET_ACTIVE_PAGE_KEY":
        return {
          ...state,
          activePageName: action.payload,
        };

      case "SET_ACTIVE_PARENT_COMPONENT_NAME":
        return {
          ...state,
          activePArentComponentName: action.payload,
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
