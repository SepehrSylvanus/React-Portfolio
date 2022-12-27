import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Sepehr Sylvanus Portfolio
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Porfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sepehr-haghdoustgame-1b645125a/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/SylvanusSlytherin?tab=repositories">
          <FaGithub />
        </a>
        <a href="https://t.me/sylvanus_the_sorcerer">
          <BsTelegram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; SSH Developing Team. All rights reserved</small>
      </div>
    </footer>
  );
};

export default footer;
