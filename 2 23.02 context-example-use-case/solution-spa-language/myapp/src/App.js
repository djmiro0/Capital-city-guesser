import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { useState } from 'react';
import LanguageContextProviderComponent, { LanguageContext } from './context/LanguageContext';

function App() {
  // const [language, setLanguage] = useState("DE")

  return (
    <div className="App">
        {/* <LanguageContext.Provider value={{language, setLanguage}}> */}
        <LanguageContextProviderComponent>
          <Header />
          <Content />
        </LanguageContextProviderComponent>
        {/* </LanguageContext.Provider> */}
    </div>
  );
}

export default App;
