import { createContext } from "react"

//1. create a context using the createContext function
export const TodoContext = createContext({});

//2. provider component => responsible for providing data to its children. 
//children are destructured from the props and placed inside Context.Provider.
export default function TodoProvider({children}) {
  

  return (
    <TodoContext.Provider >
        {children}
    </TodoContext.Provider>
  )
}

