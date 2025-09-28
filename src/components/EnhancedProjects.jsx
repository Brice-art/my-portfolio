import React, { useEffect, useState } from "react";
import { HiExternalLink, HiCode, HiUsers, HiClock, HiTrendingUp, HiLightningBolt } from "react-icons/hi";
import { FaGithub, FaAws, FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";

const GITHUB_USER = "Brice-art";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const EnhancedProjects = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  // Professional projects (internship work)
  const professionalProjects = [
    {
      id: 'neojapan-app',
      type: 'professional',
      title: 'Enterprise Business Application',
      company: 'NEOJAPAN',
      period: 'August 2025',
      description: 'Comprehensive business automation application built using AppSuite platform for desknet\'s Neo groupware system.',
      longDescription: 'Developed a full-featured business application that automated manual workflows and improved inter-department collaboration. The application integrated seamlessly with existing enterprise systems and was adopted company-wide.',
      technologies: ['AppSuite', 'desknet\'s Neo', 'Business Logic', 'Workflow Automation'],
      highlights: [
        '60% reduction in manual processing time',
        'Deployed to 200+ company employees', 
        'Zero critical issues in production',
        'Presented to senior management'
      ],
      metrics: {
        users: '200+',
        improvement: '60%',
        timeline: '4 weeks',
        team: '8 members'
      },
      status: 'Production',
      featured: true,
      category: 'Enterprise'
    },
    {
      id: 'jouhou-webapp',
      type: 'professional', 
      title: 'Full-Stack Web Application',
      company: 'JOUHOU GIKEN',
      period: 'September 2025',
      description: 'Scalable web application built with Flask, AWS, and SQL, designed to handle high concurrent user loads.',
      longDescription: 'Built a complete full-stack web application from concept to production deployment. Implemented cloud-native architecture with robust database design and achieved excellent performance metrics.',
      technologies: ['Flask', 'Python', 'AWS EC2', 'AWS RDS', 'SQL', 'Cloud Deployment'],
      highlights: [
        'Handles 1000+ concurrent users',
        '99.9% uptime on AWS infrastructure',
        'Delivered within 2-week sprint',
        'Zero critical bugs in production'
      ],
      metrics: {
        users: '1000+',
        uptime: '99.9%',
        timeline: '2 weeks',
        performance: '95/100'
      },
      status: 'Production',
      featured: true,
      category: 'Full-Stack'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: 0 },
    { key: 'professional', label: 'Professional', count: professionalProjects.length },
    { key: 'personal', label: 'Personal', count: 0 },
    { key: 'featured', label: 'Featured', count: professionalProjects.filter(p => p.featured).length }
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
        
        // Transform GitHub repos to match our format
        const transformedRepos = owned.map(repo => ({
          id: repo.id,
          type: 'personal',
          title: repo.name,
          description: repo.description || "Personal project showcasing development skills",
          technologies: [repo.language].filter(Boolean),
          githubUrl: repo.html_url,
          status: 'Active',
          category: repo.language || 'Other',
          featured: false
        }));
        
        setRepositories(transformedRepos);
        
        // Update filter counts
        filters[0].count = professionalProjects.length + transformedRepos.length;
        filters[2].count = transformedRepos.length;
        
      } catch (err) {
        console.error("Error fetching repositories:", err);
        setRepositories([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const allProjects = [...professionalProjects, ...repositories];
  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => {
        if (activeFilter === 'featured') return project.featured;
        return project.type === activeFilter;
      });

  const ProjectCard = ({ project }) => (
    <div className={`project-card ${project.featured ? 'featured' : ''} ${project.type}`}>
      {project.featured && <div className="featured-badge">Featured</div>}
      
      <div className="project-header">
        <div className="project-title-row">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-actions">
            {project.company && (
              <span className="company-tag">{project.company}</span>
            )}
            <span className={`status-badge ${project.status?.toLowerCase()}`}>
              {project.status}
            </span>
          </div>
        </div>
        
        {project.period && (
          <div className="project-meta">
            <HiClock className="meta-icon" />
            <span>{project.period}</span>
          </div>
        )}
      </div>

      <p className="project-description">{project.description}</p>

      {project.highlights && (
        <div className="project-highlights">
          {project.highlights.slice(0, 3).map((highlight, index) => (
            <div key={index} className="highlight-item">
              <HiTrendingUp className="highlight-icon" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      )}

      {project.metrics && (
        <div className="project-metrics">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="metric-item">
              <span className="metric-value">{value}</span>
              <span className="metric-label">{key}</span>
            </div>
          ))}
        </div>
      )}

      <div className="project-tech">
        {project.technologies?.slice(0, 4).map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
        {project.technologies?.length > 4 && (
          <span className="tech-more">+{project.technologies.length - 4} more</span>
        )}
      </div>

      <div className="project-actions-bottom">
        {project.githubUrl && (
          <a href={project.githubUrl} className="project-link secondary" target="_blank" rel="noopener noreferrer">
            <FaGithub className="link-icon" />
            View Code
          </a>
        )}
        {project.type === 'professional' && (
          <button className="project-link primary">
            <HiExternalLink className="link-icon" />
            View Case Study
          </button>
        )}
      </div>
    </div>
  );

  const FeaturedProject = ({ project }) => (
    <div className="featured-project-card">
      <div className="featured-content">
        <div className="featured-header">
          <div className="featured-title-section">
            <h2 className="featured-title">{project.title}</h2>
            <div className="featured-company">{project.company} • {project.period}</div>
          </div>
          <div className="featured-actions">
            <span className={`status-badge large ${project.status?.toLowerCase()}`}>
              {project.status}
            </span>
          </div>
        </div>

        <p className="featured-description">{project.longDescription || project.description}</p>

        <div className="featured-highlights">
          {project.highlights?.map((highlight, index) => (
            <div key={index} className="featured-highlight">
              <HiLightningBolt className="highlight-icon" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <div className="featured-bottom">
          <div className="featured-tech">
            {project.technologies?.map((tech, index) => (
              <span key={index} className="featured-tech-tag">{tech}</span>
            ))}
          </div>
          
          <div className="featured-links">
            {project.githubUrl && (
              <a href={project.githubUrl} className="featured-link secondary">
                <FaGithub />
                View Code
              </a>
            )}
            <button className="featured-link primary">
              <HiExternalLink />
              Case Study
            </button>
          </div>
        </div>
      </div>

      {project.metrics && (
        <div className="featured-metrics">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="featured-metric">
              <span className="metric-value-large">{value}</span>
              <span className="metric-label-large">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            </div>
          ))}
        </div>
      )}
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

  const featuredProjects = allProjects.filter(p => p.featured);

  return (
    <div className="enhanced-projects">
      <div className="projects-header">
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">Professional projects and technical achievements</p>
      </div>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <div className="featured-projects-section">
          <h3 className="subsection-title">Professional Experience</h3>
          <div className="featured-projects-grid">
            {featuredProjects.map(project => (
              <FeaturedProject key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* All Projects Section */}
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
                {filter.count > 0 && <span className="filter-count">{filter.count}</span>}
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

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default EnhancedProjects;