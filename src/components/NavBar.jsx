import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && isActive) {
        setIsActive(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isActive]);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsActive(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <div className="logo-bottom">Portfolio</div>
      </div>
      <div className={`navbar-items ${isActive ? "dropdown-active" : ""}`}>
        <div className="navbar-item home-button" onClick={() => handleNav("home")}>Home</div>
        <div className="navbar-item about-button" onClick={() => handleNav("about")}>About</div>
        <div className="navbar-item resume-button" onClick={() => handleNav("resume")}>Resume</div>
        <div className="navbar-item projects-button" onClick={() => handleNav("projects")}>Projects</div>
        <div className="navbar-item blog-button" onClick={() => handleNav("blog")}>Blog</div>
        <div className="navbar-item contact-button" onClick={() => handleNav("contact")}>Contact</div>
      </div>
      <div className="dropdown" onClick={() => setIsActive(!isActive)}>
        <BiMenu size={40} />
      </div>
    </div>
  );
};

export default NavBar;
