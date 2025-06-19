import React from "react";
import heroImg from "../assets/images/Hero-img.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-container">
      {/*<div className="hero-image">
        <img src={heroImg} alt="Brice's Image" />
      </div>*/}
      <div className="hero-text">
        <h1 className="hero-title">Brice Ali Byiringiro</h1>
        <h3 className="hero-subtitle">Javascript Developer | Civil Engineer</h3>
        <p className="hero-description">
          Hello! I'm Brice, a passionate web developer with hands-on experience
          building responsive websites and browser automation tools using
          JavaScript, React, Node.js, and MongoDB.
          <br />
          Get in touch to collaborate on exciting projects or just to say hello!
        </p>
        <div className="hero-buttons">
          <div className="hero-socials">
            <a href="https://github.com/Brice-art">
              <FaGithub size={32} color="#181717" />
            </a>
            <a href="https://www.linkedin.com/in/brice-ali-byiringiro-ab1182254/">
              <FaLinkedin size={32} color="#0A66C2" />
            </a>
          </div>

          <button>Contact me</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
