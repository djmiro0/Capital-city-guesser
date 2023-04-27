import React from "react";
import classes from "../styles/About.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function About(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className={classes.body}>
      <h1 className={classes.h1}>
        {t("Hi there, I'm Djordje")} <br />
        {t("I am a Frontend")} <br />
        <span className={classes.web}>Web</span> {t("Developer")}
      </h1>
      <button className={classes.button} onClick={() => setIsOpen(!isOpen)}>
        {t("About")}
      </button>
      {isOpen && (
        <div className={classes.dropdown}>
          <p>{t("text")}</p>
        </div>
      )}
    </div>
  );
}
