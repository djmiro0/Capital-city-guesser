import { createContext, useState } from "react";

export const LanguageContext = createContext();


//We're adding this react component to the context.
export default function LanguageContextProviderComponent({children}) {

  const [language, setLanguage] = useState("DE")

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
        {children}
    </LanguageContext.Provider>
  )
}

