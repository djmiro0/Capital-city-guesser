import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <a
          href="https://www.facebook.com/djordje.mirosavljevic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon" />
        </a>
        <a
          href="https://github.com/djmiro0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/djordje-mirosavljevic-1a4288247/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="icon" />
        </a>
      </div>
      <p className="dj">
        © <span className="footer-span">2023</span> Djordje Mirosavljevic
      </p>
    </div>
  );
}
