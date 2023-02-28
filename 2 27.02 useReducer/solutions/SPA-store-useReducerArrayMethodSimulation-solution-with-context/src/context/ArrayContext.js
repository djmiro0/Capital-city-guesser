import React, { createContext, useReducer } from "react";

export const Store = createContext();

export default function ArrayContextProvider({ children }) {
  const initialState = [];
  const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "push": {
        return [...state, action.payload];
      }
      case "pop": {
        return state.slice(0, -1);
      }
      case "unshift": {
        return [action.payload, ...state];
      }
      case "shift": {
        return state.slice(1);
      }
    }
    throw Error("Unknown action:", action.type);
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const onPush = () => dispatch({ type: "push", payload: new Date() });
  const onPop = () => dispatch({ type: "pop" });
  const onUnshift = () => dispatch({ type: "unshift", payload: new Date() });
  const onShift = () => dispatch({ type: "shift" });
  return (
    <Store.Provider value={{ state, onPush, onPop, onShift, onUnshift }}>
      {children}
    </Store.Provider>
  );
}
