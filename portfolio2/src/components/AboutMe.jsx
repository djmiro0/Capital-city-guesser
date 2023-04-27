import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/AboutMe.css";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="programs"></div>
      <div className="aboutMeContainer">
        <div className="img"></div>
        <p className="aboutMeText">{t("aboutMeText")}</p>
      </div>
    </div>
  );
}
