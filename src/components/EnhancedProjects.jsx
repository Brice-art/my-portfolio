import React, { useEffect, useState } from "react";
import { HiExternalLink, HiCode, HiClock, HiLightningBolt } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const GITHUB_USER = "Brice-art";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const EnhancedProjects = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  // Internship projects - completely accurate
  const internshipProjects = [
    {
      id: 'neojapan-shift',
      type: 'internship',
      title: 'Smart Shift Management System',
      company: 'NEOJAPAN',
      period: 'August 2025',
      duration: '1 Week',
      description: 'Automated shift scheduling system addressing real problems we experienced as part-time workers.',
      fullDescription: 'Built a business automation application using AppSuite platform during a one-week intensive internship. The system solves shift management challenges we personally faced - optimizing schedules to balance operational efficiency with worker satisfaction. Proposed AI integration for future development.',
      technologies: ['AppSuite', 'desknet\'s Neo', 'Business Process Design'],
      learnings: [
        'Learned to identify business problems from user perspective',
        'Built functional prototype in one intensive week',
        'Proposed innovative AI integration concept',
        'Mastered no-code platform from scratch'
      ],
      metrics: {
        'Duration': '1 Week',
        'Team Size': '4 People',
        'Platform': 'AppSuite',
        'Type': 'Learning'
      },
      featured: true
    },
    {
      id: 'jouhou-webapp',
      type: 'internship', 
      title: 'Full-Stack Web Application',
      company: 'JOUHOU GIKEN',
      period: 'September 2025',
      duration: '1 Week',
      description: 'Complete web application built from scratch using Flask, AWS, and SQL.',
      fullDescription: 'Developed full-stack web application during a one-week intensive internship program. Learned Flask framework, AWS cloud deployment, and SQL database integration through hands-on project-based learning. Gained exposure to professional development practices and workflows.',
      technologies: ['Flask', 'Python', 'AWS', 'SQL'],
      learnings: [
        'Built full-stack application from scratch in one week',
        'Learned AWS cloud deployment fundamentals',
        'Implemented SQL database design',
        'Gained exposure to professional coding practices'
      ],
      metrics: {
        'Duration': '1 Week',
        'Stack': 'Full-Stack',
        'Cloud': 'AWS',
        'Type': 'Learning'
      },
      featured: true
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'internship', label: 'Internships' },
    { key: 'personal', label: 'Personal' },
    { key: 'featured', label: 'Featured' }
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/starred`,
          { headers: GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {} }
        );
        if (!response.ok) throw new Error("Failed to fetch repos");
        const starred = await response.json();
        const owned = starred.filter((repo) => repo.owner.login === GITHUB_USER);
        
        const transformedRepos = owned.map(repo => ({
          id: repo.id,
          type: 'personal',
          title: repo.name,
          description: repo.description || "Personal project showcasing development skills",
          technologies: [repo.language].filter(Boolean),
          githubUrl: repo.html_url,
          featured: false
        }));
        
        setRepositories(transformedRepos);
      } catch (err) {
        console.error("Error fetching repositories:", err);
        setRepositories([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const allProjects = [...internshipProjects, ...repositories];
  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : activeFilter === 'featured'
    ? allProjects.filter(p => p.featured)
    : allProjects.filter(p => p.type === activeFilter);

  const InternshipCard = ({ project }) => (
    <div className="featured-project-card">
      <div className="featured-content">
        <div className="featured-header">
          <div className="featured-title-section">
            <h2 className="featured-title">{project.title}</h2>
            <div className="featured-company">{project.company} • {project.period} ({project.duration})</div>
          </div>
          <div className="featured-actions">
            <span className="status-badge large completed">Completed</span>
          </div>
        </div>

        <p className="featured-description">{project.fullDescription}</p>

        <div className="featured-highlights">
          <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
            What I Learned:
          </h4>
          {project.learnings.map((learning, index) => (
            <div key={index} className="featured-highlight">
              <HiLightningBolt className="highlight-icon" />
              <span>{learning}</span>
            </div>
          ))}
        </div>

        <div className="featured-bottom">
          <div className="featured-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="featured-tech-tag">{tech}</span>
            ))}
          </div>
          
          <div className="featured-links">
            <span className="featured-link primary" style={{ opacity: 0.7, cursor: 'default' }}>
              <HiExternalLink />
              Internship Project
            </span>
          </div>
        </div>
      </div>

      <div className="featured-metrics">
        {Object.entries(project.metrics).map(([key, value]) => (
          <div key={key} className="featured-metric">
            <span className="metric-value-large">{value}</span>
            <span className="metric-label-large">{key}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className={`project-card ${project.featured ? 'featured' : ''} ${project.type}`}>
      {project.featured && <div className="featured-badge">Featured</div>}
      
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        {project.company && (
          <div className="project-meta">
            <span className="company-tag">{project.company}</span>
            <HiClock className="meta-icon" style={{ marginLeft: 'var(--space-2)' }} />
            <span style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>{project.duration}</span>
          </div>
        )}
      </div>

      <p className="project-description">{project.description}</p>

      {project.learnings && (
        <div className="project-highlights" style={{ marginBottom: 'var(--space-4)' }}>
          {project.learnings.slice(0, 2).map((learning, index) => (
            <div key={index} className="highlight-item">
              <HiLightningBolt className="highlight-icon" />
              <span style={{ fontSize: '0.875rem' }}>{learning}</span>
            </div>
          ))}
        </div>
      )}

      <div className="project-tech">
        {project.technologies?.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>

      <div className="project-actions-bottom">
        {project.githubUrl && (
          <a href={project.githubUrl} className="project-link secondary" target="_blank" rel="noopener noreferrer">
            <FaGithub className="link-icon" />
            View Code
          </a>
        )}
        {project.type === 'internship' && (
          <span className="project-link primary" style={{ opacity: 0.6, cursor: 'default' }}>
            <HiCode className="link-icon" />
            Learning Project
          </span>
        )}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="projects-loading">
        <div className="loading-spinner"></div>
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="enhanced-projects">
      <div className="projects-header">
        <h2 className="section-title">Projects & Experience</h2>
        <p className="section-subtitle">Internship learning projects and personal development work</p>
      </div>

      {/* Featured Internship Projects */}
      <div className="featured-projects-section">
        <h3 className="subsection-title">Internship Experience</h3>
        <div className="featured-projects-grid">
          {internshipProjects.map(project => (
            <InternshipCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* All Projects with Filters */}
      {repositories.length > 0 && (
        <div className="all-projects-section">
          <div className="projects-controls">
            <div className="project-filters">
              {filters.map(filter => (
                <button
                  key={filter.key}
                  className={`filter-button ${activeFilter === filter.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            
            <div className="projects-count">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default EnhancedProjects;