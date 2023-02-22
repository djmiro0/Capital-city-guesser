import { createContext } from "react"; // importing createcontext

const ThemeContext = createContext(null);//creating the context and assign it to the ThemeContext var

export {ThemeContext};// export the ThemeContext to the rest of the application

//export different theme possibilities / light and dark
export const themes = {
    light: {
      color:'#202020',
      background:'lightblue'
    },
    dark: {
      color:'#e7dfdf',
      background:'#202020'
    }
  }





