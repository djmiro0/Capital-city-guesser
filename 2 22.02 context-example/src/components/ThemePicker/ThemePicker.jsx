import React, {useContext} from 'react'
import { ThemeContext, themes } from '../../context/ThemeContext';
export default function ThemePicker() {
  const {theme, setTheme} = useContext(ThemeContext);  
  return (
    <>
       <h3>Select your preferred theme</h3>
       {/* if the theme is a dark theme we would like to show the light button otherwise the dark button */}
       {theme === themes.dark ?  
       <button onClick={() => setTheme(themes.light)}>Light</button> 
       :  
       <button onClick={() => setTheme(themes.dark)}>Dark</button> }
    </>
  )
}
