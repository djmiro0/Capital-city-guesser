import React from "react";
import "../styles/Contact.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <h1>
        {t("Contact")} <span> {t("Me")}</span>
      </h1>
      <p>Djordje Mirosavljevic</p>
      <p>E-mail: djordje.mirosavljevic97@gmail.com</p>
      <p>(+49) 151 4284-3424</p>
      <h2>{t("You can also use:")}</h2>
    </div>
  );
}
