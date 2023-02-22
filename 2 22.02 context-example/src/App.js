import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react';
import LoginStatus from './components/LoginStatus/LoginStatus';
import { AuthContext } from './context/AuthContext';
import { ThemeContext, themes } from './context/ThemeContext';
import ThemePicker from './components/ThemePicker/ThemePicker';

function App() {
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const[theme, setTheme] = useState(themes.dark);

  return (
    <div>
      <AuthContext.Provider value={{username, isAuthenticated, setIsAuthenticated, setUsername}}>
        <ThemeContext.Provider value={{theme, setTheme}}>
        <Header />
        <div className='content'>
           <LoginStatus />
           <ThemePicker />
        </div>
         </ThemeContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
