import React, { createContext, useState } from "react";
//1st step: create the global store:
export const UserContext = createContext();

//2nd step create the context provider function:
export default function UserContextProvider({ children }) {
const [myVar, setMyVar]= useState(999)

  return (
    <UserContext.Provider
      value={{ greeting: "hello this is the global state", myVar, setMyVar  }}
    >
      {children}
    </UserContext.Provider>
  );
}
