import React from "react";
import classes from "../styles/Blocks.module.css";
import { useTranslation } from "react-i18next";

export default function Blocks() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("FAVORITES")}</h1>
      <div className={classes.container}>
        <a
          href="https://cute-taffy-b8ad89.netlify.app/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <section>
            <div className={classes.first}></div> <p>InFitCompany</p>
          </section>
        </a>

        <a
          href="https://classy-pothos-1b2228.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <section className={classes.secondSection}>
            <div className={classes.second}></div> <p>TIC-TAC-TOE</p>
          </section>
        </a>

        <a
          href="https://fanciful-fairy-518a24.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <section>
            <div className={classes.third}></div> <p>Bravura</p>
          </section>
        </a>
      </div>
    </div>
  );
}
