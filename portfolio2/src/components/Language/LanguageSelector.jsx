import React, { useState } from "react";
import i18n from "../../i18n"; // i18n.js file is imported here
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <div className="language-selector-container">
      <button
        onClick={(e) => chooseLanguage(e)}
        value="en"
        className={`language-selector-button ${
          selectedLanguage === "en" ? "active" : ""
        }`}
      >
        EN
      </button>
      <button
        onClick={(e) => chooseLanguage(e)}
        value="de"
        className={`language-selector-button ${
          selectedLanguage === "de" ? "active" : ""
        }`}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSelector;
