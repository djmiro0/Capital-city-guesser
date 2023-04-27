import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Header() {
  const { t } = useTranslation();
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
    if (!isClicked) {
      document.querySelector(".hidden").style.display = "block";
      document.querySelector(".visible").style.display = "none";
    } else if (isClicked) {
      document.querySelector(".visible").style.display = "block";
    }
  };

  return (
    <div className="header">
      <div className="hidden">
        <GiHamburgerMenu onClick={handleClick} />
      </div>
      <div className="visible">
        <ul>
          <Link to="/">
            <li>{t("Home")}</li>
          </Link>
          <Link to="/projects">
            <li>{t("Projects")}</li>
          </Link>
          <Link to="/aboutme">
            <li>{t("About")}</li>
          </Link>
          <Link to="/contact">
            <li>{t("Contact me")}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
