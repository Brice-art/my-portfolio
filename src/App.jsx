import { useState } from "react";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Education from "./components/Education";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Projects from "./components/Projects";
import myResume from "/Brice Ali Byiringiro Resume.pdf";

// About Section Component
const About = () => (
  <div className="about-section">
    <div className="about-container">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <div className="about-highlights">
          <div className="highlight-card">
            <h4>Full-Stack Developer</h4>
            <p>Building web applications with React, Node.js, Python, and modern cloud technologies.</p>
          </div>
          <div className="highlight-card">
            <h4>Problem Solver</h4>
            <p>Internships at NEOJAPAN and JOUHOU GIKEN taught me to identify real business problems and deliver rapid solutions.</p>
          </div>
          <div className="highlight-card">
            <h4>Always Learning</h4>
            <p>Based in Tokyo. Seeking full-time opportunities to grow my skills and make an impact.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Skills Section Component
const Skills = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "Python", "Flask",
    "HTML/CSS", "MongoDB", "SQL", "AWS", "Git",
    "REST APIs", "Problem Solving", "Rapid Learning", "Team Collaboration"
  ];

  return (
    <div className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-tags">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Resume Section
const ResumeSection = () => (
  <div className="resume-section">
    <div className="resume-container">
      <h2 className="section-title">Resume</h2>
      <div className="resume-content">
        <div className="resume-summary">
          <h3>Professional Summary</h3>
          <p>
            Full-Stack Developer with hands-on experience from intensive internship programs at 
            established Japanese companies. Demonstrated ability to rapidly learn new technologies, 
            identify real business problems, and deliver functional solutions. Combines engineering 
            background with practical software development skills in both no-code platforms and 
            traditional full-stack development.
          </p>
          <div className="resume-highlights">
            <div className="resume-stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Intensive Internships</span>
            </div>
            <div className="resume-stat">
              <span className="stat-number">1 Week</span>
              <span className="stat-label">Each Program</span>
            </div>
            <div className="resume-stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Apps Developed</span>
            </div>
          </div>
        </div>
        
        <div className="resume-download">
          <p>Download my complete resume for detailed information about my experience, education, and projects.</p>
          <a
            href={myResume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download My Resume"
            download
            className="resume-download-btn"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Contact Section
const Contact = () => {
  const handleScheduleCall = () => {
    window.open('mailto:bricealibyilingiro@gmail.com?subject=Let\'s Schedule a Call&body=Hi Brice, I\'d like to schedule a call to discuss potential opportunities.', '_blank');
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2 className="section-title">Ready to Build Something Amazing Together?</h2>
        <p className="section-subtitle">
          Let's discuss how my experience can contribute to your team's success
        </p>
      </div>

      <div className="contact-cta">
        <h3 className="cta-title">Whether You're Looking To:</h3>
        <div className="cta-list">
          <div className="cta-item">• Build a new web application</div>
          <div className="cta-item">• Modernize existing systems</div>
          <div className="cta-item">• Need technical consultation</div>
          <div className="cta-item">• Discuss collaboration opportunities</div>
        </div>
        <p className="cta-description">
          I'm always excited to take on new challenges and contribute to meaningful projects.
        </p>
        <button className="cta-button" onClick={handleScheduleCall}>
          Schedule a Call
        </button>
      </div>

      <div className="contact-content">
        <div className="contact-info-enhanced">
          <h3>Get In Touch</h3>
          <div className="contact-item-enhanced">
            <div className="contact-icon-enhanced">
              <svg fill="currentColor" viewBox="0 0 20 20" width="20" height="20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <div>
              <div className="contact-label">Email</div>
              <a href="mailto:bricealibyilingiro@gmail.com" className="contact-link-enhanced">
                bricealibyilingiro@gmail.com
              </a>
              <div className="contact-note">Usually responds within 24 hours</div>
            </div>
          </div>

          <div className="contact-item-enhanced">
            <div className="contact-icon-enhanced">
              <svg fill="currentColor" viewBox="0 0 20 20" width="20" height="20">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <div className="contact-label">GitHub</div>
              <a href="https://github.com/Brice-art" className="contact-link-enhanced">
                github.com/Brice-art
              </a>
              <div className="contact-note">View my code and contributions</div>
            </div>
          </div>

          <div className="contact-item-enhanced">
            <div className="contact-icon-enhanced">
              <svg fill="currentColor" viewBox="0 0 20 20" width="20" height="20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <div className="contact-label">LinkedIn</div>
              <a href="https://www.linkedin.com/in/brice-ali-byiringiro-ab1182254/" className="contact-link-enhanced">
                Connect on LinkedIn
              </a>
              <div className="contact-note">Professional networking</div>
            </div>
          </div>
        </div>

        <div className="contact-info-card">
          <h4>Quick Facts</h4>
          <div className="quick-facts">
            <div className="fact-item">
              <strong>Location:</strong> Tokyo, Japan
            </div>
            <div className="fact-item">
              <strong>Availability:</strong> Immediate start
            </div>
            <div className="fact-item">
              <strong>Work Preference:</strong> Remote-friendly
            </div>
            <div className="fact-item">
              <strong>Experience:</strong> Enterprise & Startup environments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <NavBar />
      
      <section id="home">
        <Hero />
      </section> 
      
      <section id="about">
        <About />
        <Skills />
        
        <div style={{ marginTop: 'var(--space-16)' }}>
          <h2 className="section-title">Background</h2>
          <div className="background-content">
            <div className="background-section">
              <h3 className="background-subtitle">Education</h3>
              <Education />
            </div>
            <div className="background-section">
              <h3 className="background-subtitle">Professional Experience</h3>
              <ProfessionalExperience />
            </div>
          </div>
        </div>
      </section>

      <section id="resume">
        <ResumeSection />
      </section>

      <section id="projects">
        <Projects />
      </section> 

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;