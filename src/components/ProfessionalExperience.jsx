import React, { useState } from "react";
import { HiLocationMarker, HiCalendar, HiUsers, HiCog, HiTrendingUp, HiLightningBolt } from "react-icons/hi";
import { FaAws, FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";

const ProfessionalExperience = () => {
  const [activeTab, setActiveTab] = useState('neojapan');

  const experiences = {
    neojapan: {
      company: "NEOJAPAN",
      role: "Software Development Intern",
      period: "August 2025",
      duration: "1 Week",
      location: "Yokohama, Japan (On-site)",
      logo: "NJ",
      color: "#2563eb",
      description: "One-week intensive internship program focused on business application development using no-code platforms",
      achievements: [
        {
          icon: <HiCog />,
          title: "Shift Management System Development",
          description: "Built an automated shift scheduling application using AppSuite platform. Solved a real problem our team experienced as part-time workers - optimizing schedules while balancing labor costs and employee satisfaction.",
          impact: "Completed functional prototype in one week"
        },
        {
          icon: <HiUsers />,
          title: "Problem-Driven Development", 
          description: "Identified business problem from personal experience working part-time. Collaborated with team to design solution addressing pain points for both shift managers and workers.",
          impact: "Learned to connect real-world problems to technical solutions"
        },
        {
          icon: <HiLightningBolt />,
          title: "No-Code Platform Mastery",
          description: "Learned AppSuite platform from scratch during the week. Built functional business automation tool and proposed AI integration concept to NEOJAPAN development team.",
          impact: "Demonstrated rapid learning under tight timeline"
        },
        {
          icon: <HiTrendingUp />,
          title: "Business Scalability Thinking",
          description: "Understood how shift management complexity scales with company size. Designed system considering enterprise-level requirements and efficiency optimization.",
          impact: "Developed business-minded approach to software development"
        }
      ],
      technologies: [
        { name: "AppSuite", level: 70 },
        { name: "desknet's Neo", level: 65 },
        { name: "Business Process Design", level: 75 },
        { name: "Team Collaboration", level: 80 }
      ],
      keyLearnings: [
        "No-code platform development",
        "Identifying problems from user perspective",
        "Rapid prototyping techniques",
        "Agile team collaboration"
      ]
    },
    jouhou: {
      company: "JOUHOU GIKEN",
      role: "Web Development Intern", 
      period: "September 2025",
      duration: "1 Week",
      location: "Tochigi, Japan (On-site)",
      logo: "JG",
      color: "#059669",
      description: "One-week intensive hands-on program learning full-stack web development with modern cloud technologies",
      achievements: [
        {
          icon: <FaAws />,
          title: "Full-Stack Application Development",
          description: "Built complete web application from scratch using Flask, AWS, and SQL. Learned the entire development workflow from local development to cloud deployment.",
          impact: "Gained practical experience with production tech stack"
        },
        {
          icon: <HiCog />,
          title: "Cloud Infrastructure Basics",
          description: "Learned AWS deployment fundamentals and database architecture. Implemented cloud-based application following industry practices taught during the program.",
          impact: "Understanding of modern cloud deployment workflows"
        },
        {
          icon: <HiLightningBolt />,
          title: "Intensive Learning Environment",
          description: "Absorbed new technologies rapidly in project-based learning format. Built functional application while learning Flask framework, AWS services, and SQL simultaneously.",
          impact: "Proved ability to learn quickly under pressure"
        },
        {
          icon: <HiUsers />,
          title: "Professional Development Practices",
          description: "Exposed to real-world coding practices including proper code organization, version control workflows, and deployment procedures.",
          impact: "Gained insight into professional development standards"
        }
      ],
      technologies: [
        { name: "Flask/Python", level: 70 },
        { name: "AWS", level: 60 },
        { name: "SQL", level: 65 },
        { name: "Web Development", level: 75 }
      ],
      keyLearnings: [
        "Full-stack development fundamentals",
        "Cloud deployment with AWS",
        "Database design and SQL",
        "Professional coding practices"
      ]
    }
  };

  const currentExperience = experiences[activeTab];

  return (
    <div className="professional-experience">
      <div className="experience-header">
        <h2 className="section-title">Internship Experience</h2>
        <p className="section-subtitle">Two intensive one-week programs providing hands-on development experience</p>
      </div>

      <div className="experience-tabs">
        {Object.entries(experiences).map(([key, exp]) => (
          <button
            key={key}
            className={`tab-button ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
            style={{ '--tab-color': exp.color }}
          >
            <div className="tab-logo" style={{ backgroundColor: exp.color }}>
              {exp.logo}
            </div>
            <div className="tab-info">
              <div className="tab-company">{exp.company}</div>
              <div className="tab-role">{exp.duration} Internship</div>
            </div>
          </button>
        ))}
      </div>

      <div className="experience-content">
        <div className="experience-main">
          <div className="experience-header-card">
            <div className="company-info">
              <div className="company-logo-large" style={{ backgroundColor: currentExperience.color }}>
                {currentExperience.logo}
              </div>
              <div className="company-details">
                <h3 className="company-name">{currentExperience.company}</h3>
                <h4 className="role-title">{currentExperience.role}</h4>
                <div className="experience-meta">
                  <div className="meta-item">
                    <HiCalendar className="meta-icon" />
                    <span>{currentExperience.period} ({currentExperience.duration})</span>
                  </div>
                  <div className="meta-item">
                    <HiLocationMarker className="meta-icon" />
                    <span>{currentExperience.location}</span>
                  </div>
                </div>
                <p className="experience-description">{currentExperience.description}</p>
              </div>
            </div>
          </div>

          <div className="achievements-grid">
            {currentExperience.achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon" style={{ color: currentExperience.color }}>
                  {achievement.icon}
                </div>
                <div className="achievement-content">
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-description">{achievement.description}</p>
                  <div className="achievement-impact">{achievement.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-sidebar">
          <div className="technologies-card">
            <h4 className="card-title">Skills Developed</h4>
            <div className="technologies-list">
              {currentExperience.technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-header">
                    <span className="tech-name">{tech.name}</span>
                    <span className="tech-percentage">{tech.level}%</span>
                  </div>
                  <div className="tech-progress">
                    <div 
                      className="tech-progress-fill" 
                      style={{ width: `${tech.level}%`, backgroundColor: currentExperience.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="learnings-card">
            <h4 className="card-title">Key Takeaways</h4>
            <ul className="learnings-list">
              {currentExperience.keyLearnings.map((learning, index) => (
                <li key={index} className="learning-item">
                  <span className="learning-bullet" style={{ backgroundColor: currentExperience.color }}></span>
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExperience;