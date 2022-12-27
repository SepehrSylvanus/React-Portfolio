import React from "react";
import Me from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import {FiUsers } from 'react-icons/fi'
import {VscFolderLibrary } from 'react-icons/vsc'
import './about.css'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>+8 Months Working Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>-</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6 Completed</small>
            </article>
          </div>
          <p>Hello! I'm sepehr sylvanus; A 23 years old Frontend developer. i started my Frontend jurney about a year and half ago and graduated about 8 months ago. I can make Frontend from scratch, I mean from wireframe to the end.
            If you are interested to work with me you can use the link below 🤗.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
