import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // default dark

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && isActive) {
        setIsActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isActive]);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);}
  }, []);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsActive(false);
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

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
        {/* <div className="navbar-item blog-button" onClick={() => handleNav("blog")}>Blog</div> */}
        <div className="navbar-item contact-button" onClick={() => handleNav("contact")}>Contact</div>

        {/* Theme toggle */}
        <div className="theme-toggle-container">
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {isDarkMode ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>
      </div>

      <div className="dropdown" onClick={() => setIsActive(!isActive)}>
        <BiMenu size={40} />
      </div>
    </div>
  );
};

export default NavBar;
