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
      location: "Yokohama, Japan (On-site)",
      logo: "NJ",
      color: "#2563eb",
      description: "Developed enterprise business applications using no-code/low-code platforms",
      achievements: [
        {
          icon: <HiCog />,
          title: "Enterprise Application Development",
          description: "Built comprehensive business application using AppSuite platform for desknet's Neo groupware",
          impact: "60% reduction in manual workflow processing time"
        },
        {
          icon: <HiUsers />,
          title: "Cross-Functional Collaboration", 
          description: "Worked with diverse teams of students and senior company developers in agile environment",
          impact: "Successfully collaborated with 8+ team members"
        },
        {
          icon: <HiLightningBolt />,
          title: "Rapid Prototyping & Automation",
          description: "Specialized in rapid application prototyping and business process automation",
          impact: "Delivered prototype 2 weeks ahead of schedule"
        },
        {
          icon: <HiTrendingUp />,
          title: "Executive Presentation",
          description: "Presented final application to company employees and leadership team",
          impact: "Application adopted by 200+ employees company-wide"
        }
      ],
      technologies: [
        { name: "AppSuite", icon: "🔧", level: 75 },
        { name: "desknet's Neo", icon: "🌐", level: 70 },
        { name: "Business Automation", icon: "⚡", level: 80 },
        { name: "Agile Development", icon: "🔄", level: 85 }
      ],
      keyLearnings: [
        "Enterprise software development lifecycle",
        "No-code/low-code platform mastery",
        "Cross-functional team dynamics",
        "Business process optimization"
      ]
    },
    jouhou: {
      company: "JOUHOU GIKEN",
      role: "Web Development Intern", 
      period: "September 2025",
      location: "Tochigi, Japan (On-site)",
      logo: "JG",
      color: "#059669",
      description: "Built full-stack web applications using modern cloud technologies",
      achievements: [
        {
          icon: <FaAws />,
          title: "Full-Stack Web Application",
          description: "Developed complete web application using Flask, AWS, and SQL in intensive project-based environment",
          impact: "Successfully deployed application serving 1000+ concurrent users"
        },
        {
          icon: <HiCog />,
          title: "Cloud Architecture Implementation",
          description: "Designed and implemented cloud deployment strategy and database architecture",
          impact: "Achieved 99.9% uptime on AWS infrastructure"
        },
        {
          icon: <HiLightningBolt />,
          title: "Rapid Development Cycle",
          description: "Delivered functional prototype within aggressive 2-week timeline using rapid iteration",
          impact: "Zero critical bugs in production deployment"
        },
        {
          icon: <HiUsers />,
          title: "Professional Development Practices",
          description: "Applied industry-standard development practices and collaborative coding methodologies",
          impact: "Code review approval rate of 95%"
        }
      ],
      technologies: [
        { name: "Flask", icon: <FaPython />, level: 80 },
        { name: "AWS", icon: <FaAws />, level: 70 },
        { name: "SQL", icon: <FaDatabase />, level: 75 },
        { name: "Python", icon: <FaPython />, level: 85 }
      ],
      keyLearnings: [
        "Cloud-native application architecture",
        "Database design and optimization",
        "DevOps and deployment strategies",
        "Production-level code quality"
      ]
    }
  };

  const currentExperience = experiences[activeTab];

  return (
    <div className="professional-experience">
      <div className="experience-header">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">Real-world software development experience at established companies</p>
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
              <div className="tab-role">{exp.role}</div>
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
                    <span>{currentExperience.period}</span>
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
            <h4 className="card-title">Technologies Used</h4>
            <div className="technologies-list">
              {currentExperience.technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-header">
                    <div className="tech-info">
                      <span className="tech-icon">{tech.icon}</span>
                      <span className="tech-name">{tech.name}</span>
                    </div>
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
            <h4 className="card-title">Key Learnings</h4>
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