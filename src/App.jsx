import { useState } from "react";
import React from "react";
import cors from "cors";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Work from "./components/Work";
import Education from "./components/Education";
import Repositories from "./components/Repositories";
import myResume from "/Brice_resume.pdf";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <h1 className="education-title">Education</h1>
        <Education />
        <h1 className="experience-title">Experience</h1>
        <Work />
      </section>
      <section id="resume">
        <h1>Resume</h1>
        <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
          <a
            href={myResume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download My Resume"
            download
            className="resume-download-btn"
          >
            Download My Resume (PDF)
          </a>
        </div>
        {/*<Resume />*/}
      </section>
      <section id="projects">
        <h1 className="projects-title">Projects | Github Repositories</h1>
        <Repositories />
      </section>
      <section id="contact">
        <h3 className="contact-title">Get in touch</h3>
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
