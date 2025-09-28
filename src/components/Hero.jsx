import React from "react";
import heroImg from "../assets/images/Hero-img.png";
import { FaGithub, FaLinkedin, FaDownload, FaCalendarAlt } from "react-icons/fa";
import { HiLocationMarker, HiMail } from "react-icons/hi";

const Hero = () => {
  const skipToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skipToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-text">Available for Full-Time Opportunities</span>
          </div>
          
          <h1 className="hero-title">
            Enterprise-Ready 
            <span className="hero-highlight"> Full-Stack Developer</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Software Development Intern at <span className="company-highlight">NEOJAPAN</span> & <span className="company-highlight">JOUHOU GIKEN</span>
          </h2>
          
          <p className="hero-description">
            I build scalable web applications and enterprise solutions with proven experience 
            in both <strong>no-code platforms</strong> and <strong>full-stack development</strong>. 
            From Flask + AWS applications to AppSuite business automation, I deliver code that performs.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Internships Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Users Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">60%</span>
              <span className="stat-label">Process Improvement</span>
            </div>
          </div>

          <div className="hero-tech-stack">
            <span className="tech-label">Recent Work:</span>
            <div className="tech-badges">
              <span className="tech-badge">Flask</span>
              <span className="tech-badge">AWS</span>
              <span className="tech-badge">AppSuite</span>
              <span className="tech-badge">React</span>
              <span className="tech-badge">Node.js</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={skipToProjects}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={skipToContact}>
              <HiMail className="btn-icon" />
              Get In Touch
            </button>
          </div>

          <div className="hero-info">
            <div className="info-item">
              <HiLocationMarker className="info-icon" />
              <span>Tokyo, Japan • Open to Remote</span>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/Brice-art" className="social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/brice-ali-byiringiro-ab1182254/" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image">
            {/* Uncomment when you have a professional headshot */}
            {/* <img src={heroImg} alt="Brice Ali Byiringiro - Full-Stack Developer" /> */}
            <div className="placeholder-avatar">
              <span className="avatar-initials">BA</span>
            </div>
          </div>
          
          <div className="floating-cards">
            <div className="floating-card card-1">
              <div className="card-header">
                <div className="company-logo neojapan-logo">NJ</div>
                <div>
                  <div className="card-company">NEOJAPAN</div>
                  <div className="card-role">Software Development Intern</div>
                </div>
              </div>
              <div className="card-achievement">Built AppSuite business application</div>
            </div>

            <div className="floating-card card-2">
              <div className="card-header">
                <div className="company-logo jouhou-logo">JG</div>
                <div>
                  <div className="card-company">JOUHOU GIKEN</div>
                  <div className="card-role">Web Development Intern</div>
                </div>
              </div>
              <div className="card-achievement">Flask + AWS full-stack app</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;