import React from "react";
import { HiAcademicCap, HiGlobeAlt, HiBookOpen, HiLightBulb, HiCalendar } from "react-icons/hi";
import coursera from "../assets/images/coursera-logo-full-rgb.png";
import freeCodeCamp from "../assets/images/FreeCodeCamp.svg";
import udemy from "../assets/images/Udemy New.svg";
import saidaiLogo from "../assets/images/saitama-u-logo.jpg";
import kosenLogo from "../assets/images/nagaoka-logo.jpg";

const EnhancedEducation = () => {
  const formalEducation = [
    {
      institution: "Saitama University",
      degree: "Civil and Environmental Engineering",
      location: "Saitama, Japan",
      period: "2023-Present",
      description: "Developed strong analytical and problem-solving skills through engineering coursework. Built foundation in systematic thinking and project management.",
      skills: ["Problem Solving", "Systems Thinking", "Project Management", "Technical Analysis", "Proffesional Japanese"],
      logo: saidaiLogo,
      website: "https://www.saitama-u.ac.jp/"
    },
    {
      institution: "Nagaoka National College of Technology",
      degree: "associate in Engineering, Civil Engineering",
      location: "Niigata, Japan", 
      period: "2020-2022",
      description: "Technical foundation in engineering principles with emphasis on practical application and hands-on learning.",
      skills: ["Mathematical Foundation", "Technical Foundation", "Practical Application", "Engineering Principles"],
      logo: kosenLogo,
      website: "https://www.nagaoka-ct.ac.jp/"
    },
    {
      institution: "Tokyo Japanese Language Education Center",
      degree: "Japanese Language Studies",
      location: "Tokyo, Japan",
      period: "2019-2020", 
      description: "Intensive Japanese language training preparing for academic studies in Japan. Achieved conversational proficiency.",
      skills: ["Japanese Language", "Cross-cultural Communication", "Adaptation"],
      logo: null,
      website: "https://www.jasso.go.jp/ryugaku/jlec/tjlec/index.html"
    }
  ];

  const continuousLearning = [
    {
      platform: "freeCodeCamp",
      achievements: [
        "Responsive Web Design",
        "JavaScript Algorithms and Data Structures", 
        "Front End Development Libraries",
        "Back End Development and APIs"
      ],
      description: "Comprehensive full-stack web development curriculum with hands-on projects",
      logo: freeCodeCamp,
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "APIs"]
    },
    // {
    //   platform: "Coursera",
    //   achievements: [
    //     "Google IT Automation with Python",
    //     "IBM Full Stack Software Developer",
    //     "Meta Front-End Developer Professional Certificate"
    //   ],
    //   description: "Professional certificates from industry leaders focusing on practical skills",
    //   logo: coursera,
    //   skills: ["Python", "Automation", "Professional Development", "Industry Standards"]
    // },
    {
      platform: "Udemy",
      achievements: [
        "The Complete Web Developer Bootcamp",
        "React - The Complete Guide",
        "Node.js Developer Course"
      ],
      description: "In-depth courses on modern web development technologies and frameworks", 
      logo: udemy,
      skills: ["Full-Stack Development", "Modern Frameworks", "Best Practices"]
    }
  ];

  const EducationCard = ({ education, type = "formal" }) => (
    <div className={`education-card ${type}`}>
      <div className="education-card-header">
        {education.logo ? (
          <img src={education.logo} alt={`${education.institution || education.platform} logo`} className="education-logo" />
        ) : (
          <div className="education-logo-placeholder">
            <HiAcademicCap />
          </div>
        )}
        <div className="education-info">
          <h3 className="education-title">{education.institution || education.platform}</h3>
          <h4 className="education-subtitle">{education.degree || "Online Learning Platform"}</h4>
          {education.location && (
            <div className="education-meta">
              <HiGlobeAlt className="meta-icon" />
              <span>{education.location}</span>
            </div>
          )}
          {education.period && (
            <div className="education-meta">
              <HiCalendar className="meta-icon" />
              <span>{education.period}</span>
            </div>
          )}
        </div>
      </div>

      <p className="education-description">{education.description}</p>

      {education.achievements && (
        <div className="achievements-section">
          <h5 className="achievements-title">
            <HiBookOpen className="section-icon" />
            Key Achievements
          </h5>
          <ul className="achievements-list">
            {education.achievements.map((achievement, index) => (
              <li key={index} className="achievement-item">{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="skills-section">
        <h5 className="skills-title">
          <HiLightBulb className="section-icon" />
          Skills Developed
        </h5>
        <div className="skills-tags">
          {education.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      {education.website && (
        <a 
          href={education.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="education-link"
        >
          Visit Institution
        </a>
      )}
    </div>
  );

  return (
    <div className="enhanced-education">
      <div className="education-intro">
        <h2 className="section-title">Educational Background</h2>
        <p className="section-subtitle">
          From engineering foundations to software development expertise through formal education and continuous learning
        </p>
      </div>

      <div className="education-journey">
        <div className="formal-education-section">
          <h3 className="subsection-title">
            <HiAcademicCap className="title-icon" />
            Formal Education
          </h3>
          <div className="education-grid">
            {formalEducation.map((edu, index) => (
              <EducationCard key={index} education={edu} type="formal" />
            ))}
          </div>
        </div>

        <div className="continuous-learning-section">
          <h3 className="subsection-title">
            <HiBookOpen className="title-icon" />
            Continuous Learning & Certifications
          </h3>
          <div className="learning-grid">
            {continuousLearning.map((learning, index) => (
              <EducationCard key={index} education={learning} type="continuous" />
            ))}
          </div>
        </div>
      </div>

      <div className="education-summary">
        <div className="summary-card">
          <h4>Learning Philosophy</h4>
          <p>
            My educational journey reflects a commitment to continuous growth and adaptation. 
            From engineering fundamentals to cutting-edge web technologies, I believe in 
            combining theoretical knowledge with practical application. The transition from 
            Civil Engineering to Software Development demonstrates my ability to learn quickly 
            and apply knowledge across different domains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedEducation;