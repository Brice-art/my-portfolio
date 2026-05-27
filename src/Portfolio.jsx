import { useState, useEffect, useRef } from "react";

// ─── Fonts loaded via @import in style tag ───────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Mono:wght@300;400&family=Syne:wght@400;500;600;700;800&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      background: #f5f4f0;
      color: #1a1a18;
      font-family: 'DM Mono', monospace;
      -webkit-font-smoothing: antialiased;
    }

    ::selection { background: #1a1a18; color: #f5f4f0; }

    .fade-in {
      opacity: 0;
      transform: translateY(18px);
      transition: opacity 0.75s cubic-bezier(0.4,0,0.2,1), transform 0.75s cubic-bezier(0.4,0,0.2,1);
    }
    .fade-in.visible { opacity: 1; transform: translateY(0); }

    .fade-in-slow {
      opacity: 0;
      transition: opacity 1.2s ease;
    }
    .fade-in-slow.visible { opacity: 1; }

    @keyframes marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .marquee-track {
      display: flex;
      width: max-content;
      animation: marquee 28s linear infinite;
    }

    .marquee-track:hover { animation-play-state: paused; }

    .project-card {
      border-top: 1px solid #1a1a1822;
      padding: 2.5rem 0;
      transition: background 0.2s ease;
      cursor: default;
    }
    .project-card:last-child { border-bottom: 1px solid #1a1a1822; }

    .project-card .arrow {
      opacity: 0;
      transform: translateX(-6px);
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
    .project-card:hover .arrow {
      opacity: 1;
      transform: translateX(0);
    }
    .project-card:hover .project-title {
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 4px;
    }

    .btn-outline {
      display: inline-block;
      padding: 0.65rem 1.4rem;
      border: 1px solid #1a1a1855;
      font-family: 'DM Mono', monospace;
      font-size: 0.72rem;
      font-weight: 400;
      letter-spacing: 0.06em;
      text-decoration: none;
      color: #1a1a18;
      background: transparent;
      transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
      cursor: pointer;
    }
    .btn-outline:hover {
      background: #1a1a18;
      color: #f5f4f0;
      border-color: #1a1a18;
    }

    .btn-solid {
      display: inline-block;
      padding: 0.65rem 1.4rem;
      border: 1px solid #1a1a18;
      font-family: 'DM Mono', monospace;
      font-size: 0.72rem;
      font-weight: 400;
      letter-spacing: 0.06em;
      text-decoration: none;
      color: #f5f4f0;
      background: #1a1a18;
      transition: background 0.15s ease, color 0.15s ease;
      cursor: pointer;
    }
    .btn-solid:hover {
      background: #333;
    }

    .nav-link {
      font-family: 'DM Mono', monospace;
      font-size: 0.7rem;
      letter-spacing: 0.08em;
      text-decoration: none;
      color: #1a1a1888;
      transition: color 0.15s ease;
    }
    .nav-link:hover { color: #1a1a18; }

    .tag {
      font-family: 'DM Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.05em;
      color: #1a1a1866;
      border: 1px solid #1a1a1822;
      padding: 0.2rem 0.55rem;
    }

    .scroll-line {
      width: 1px;
      height: 60px;
      background: #1a1a1833;
      animation: scrollPulse 2s ease-in-out infinite;
    }
    @keyframes scrollPulse {
      0%, 100% { opacity: 0.3; transform: scaleY(1); }
      50%       { opacity: 0.9; transform: scaleY(1.15); }
    }

    @media (max-width: 640px) {
      .hero-name { font-size: 2.4rem !important; }
      .hero-sub  { font-size: 0.75rem !important; }
      .section-title { font-size: 2rem !important; }
    }
  `}</style>
);

// ─── Nav ──────────────────────────────────────────────────────────────────────
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "1.4rem 2.5rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(245,244,240,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid #1a1a1814" : "1px solid transparent",
      transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease"
    }}>
      <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", color: "#1a1a18" }}>
        BAB
      </span>
      <div style={{ display: "flex", gap: "2.5rem" }}>
        {[["Work", "#work"], ["Resume", "#resume"], ["Skills", "#skills"], ["Contact", "#contact"]].map(([label, href]) => (
          <a key={label} href={href} className="nav-link">{label}</a>
        ))}
      </div>
    </nav>
  );
};


const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section style={{
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      padding: '4rem 2rem',
      position: 'relative'
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(20, 184, 166, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(20, 184, 166, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        pointerEvents: 'none'
      }} />

        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease'
        }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(20, 184, 166, 0.1)',
          border: '1px solid rgba(20, 184, 166, 0.3)',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: '600',
          color: '#14b8a6',
          marginBottom: '2rem',
          letterSpacing: '0.05em'
        }}>
          SOFTWARE ENGINEERING
        </div>

        <h1 style={{
          fontSize: '4rem',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em'
        }}>
          Full-Stack Developer specializing in Laravel & React. 
        </h1>

        <h2 style={{
          fontSize: '2rem',
          fontWeight: '500',
          color: '#9ca3af',
          lineHeight: '1.4',
          marginBottom: '2rem'
        }}>
          I build clean, functional web applications and I’m obsessed with growing into systems-level engineering.
        </h2>

        {/* Quick stats */}
        <div style={{
          display: 'flex',
          gap: '3rem',
          marginBottom: '3rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid rgba(20, 184, 166, 0.1)'
        }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: '#14b8a6' }}>2</div>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Intensive Internships</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: '#14b8a6' }}>4</div>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Projects Built</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: '#14b8a6' }}>Apr 2026</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="#work"
            style={{
              padding: '1rem 2rem',
              background: '#14b8a6',
              color: '#0a0e27',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.875rem',
              transition: 'all 0.2s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#0d9488';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#14b8a6';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            See My Work
          </a>
          <a
            href="#resume"
            style={{
              padding: '1rem 2rem',
              background: 'transparent',
              color: '#e8eaed',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.875rem',
              border: '1px solid rgba(226, 232, 237, 0.12)',
              transition: 'all 0.2s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(226,232,237,0.04)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
            }}
          >
            View Resume
          </a>
          <a
            href="/cv.pdf"
            download
            style={{
              padding: '1rem 2rem',
              background: 'transparent',
              color: '#9ca3af',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.875rem',
              border: '1px solid rgba(156,163,175,0.12)',
              transition: 'all 0.2s ease',
              display: 'inline-block'
            }}
          >
            Download CV
          </a>
          <a
            href="#contact"
            style={{
              padding: '1rem 2rem',
              background: 'transparent',
              color: '#14b8a6',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.875rem',
              border: '1px solid rgba(20, 184, 166, 0.5)',
              transition: 'all 0.2s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(20, 184, 166, 0.1)';
              e.target.style.borderColor = '#14b8a6';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = 'rgba(20, 184, 166, 0.5)';
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};


const SkillsSection = () => {
  const skillGroups = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript'],
      color: '#14b8a6'
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'PHP', 'Laravel', 'Flask', 'Django'],
      color: '#06b6d4'
    },
    {
      category: 'Database / SQL',
      skills: ['SQL', 'PostgreSQL'],
      color: '#8b5cf6'
    },
    {
      category: 'Algorithms',
      skills: ['DSA in Python'],
      color: '#f59e0b'
    }
  ];

  return (
    <section
      id="skills"
      style={{
        minHeight: '60vh',
        padding: '6rem 2rem',
        background: 'rgba(15, 23, 42, 0.3)'
      }}
    >
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '1rem',
          color: '#e8eaed',
          textAlign: 'center'
        }}>
          Tools I Use
        </h2>
        <p style={{
          fontSize: '1rem',
          color: '#9ca3af',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          The tech stack I work with to solve problems
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
        }}>
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: `1px solid ${group.color}33`,
                borderRadius: '12px',
                padding: '2rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${group.color}88`;
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 30px ${group.color}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${group.color}33`;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: group.color,
                marginBottom: '1rem'
              }}>
                {group.category}
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: '0.875rem',
                      color: '#d1d5db',
                      fontWeight: '500'
                    }}
                  >
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const ProjectsSection = () => {
  const projects = [
    {
      title: 'Agakayi',
      description: 'A personal React app inspired by the traditional Rwandan "agakayi" notebook. Built to practice React and backend integration.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      status: 'Live',
      statusColor: '#22c55e',
      link: 'https://agakayi.xyz',
      github: 'https://github.com/Brice-art/Agakayi',
      type: 'personal',
      highlight: 'Personal production project'
    },
    {
      title: 'Personal Portfolio',
      description: 'This portfolio website — a lightweight React site focused on clarity and readable code.',
      tech: ['React', 'CSS'],
      status: 'Live',
      statusColor: '#22c55e',
      link: null,
      github: 'https://github.com/Brice-art',
      type: 'personal',
      highlight: 'Portfolio'
    }
  ];

  return (
    <section
      id="work"
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        background: '#0a0e27'
      }}
    >
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '1rem',
          color: '#e8eaed',
          textAlign: 'center'
        }}>
          What I've Built
        </h2>
        <p style={{
          fontSize: '1rem',
          color: '#9ca3af',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          Personal projects and internship work
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(15, 23, 42, 0.6)',
        border: '1px solid rgba(20, 184, 166, 0.2)',
        borderRadius: '12px',
        padding: '2rem',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        borderColor: hovered ? 'rgba(20, 184, 166, 0.5)' : 'rgba(20, 184, 166, 0.2)',
        boxShadow: hovered ? '0 12px 30px rgba(20, 184, 166, 0.15)' : 'none'
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#e8eaed',
            marginBottom: '0.5rem'
          }}>
            {project.title}
          </h3>
          {project.company && (
            <div style={{
              fontSize: '0.875rem',
              color: '#14b8a6',
              fontWeight: '600'
            }}>
              {project.company} • {project.duration}
            </div>
          )}
        </div>
        <div style={{
          display: 'inline-block',
          padding: '0.4rem 0.75rem',
          background: `${project.statusColor}22`,
          border: `1px solid ${project.statusColor}`,
          borderRadius: '6px',
          fontSize: '0.75rem',
          fontWeight: '600',
          color: project.statusColor,
          letterSpacing: '0.05em'
        }}>
          {project.status}
        </div>
      </div>

      {/* Description */}
      <p style={{
        fontSize: '1rem',
        color: '#d1d5db',
        lineHeight: '1.6',
        marginBottom: '1.5rem'
      }}>
        {project.description}
      </p>

      {/* Highlight */}
      {project.highlight && (
        <div style={{
          padding: '0.75rem 1rem',
          background: 'rgba(20, 184, 166, 0.1)',
          border: '1px solid rgba(20, 184, 166, 0.3)',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          fontSize: '0.875rem',
          color: '#14b8a6',
          fontWeight: '500'
        }}>
          ⚡ {project.highlight}
        </div>
      )}

      {/* Tech Stack */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap',
        marginBottom: '1.5rem'
      }}>
        {project.tech.map((tech, i) => (
          <span
            key={i}
            style={{
              padding: '0.4rem 0.75rem',
              background: 'rgba(100, 116, 139, 0.2)',
              border: '1px solid rgba(100, 116, 139, 0.4)',
              borderRadius: '4px',
              fontSize: '0.75rem',
              color: '#cbd5e1',
              fontWeight: '500'
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.6rem 1.25rem',
              background: '#14b8a6',
              color: '#0a0e27',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '0.875rem',
              fontWeight: '600',
              transition: 'all 0.2s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => e.target.style.background = '#0d9488'}
            onMouseLeave={(e) => e.target.style.background = '#14b8a6'}
          >
            View Live →
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.6rem 1.25rem',
              background: 'transparent',
              color: '#14b8a6',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '0.875rem',
              fontWeight: '600',
              border: '1px solid rgba(20, 184, 166, 0.5)',
              transition: 'all 0.2s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(20, 184, 166, 0.1)';
              e.target.style.borderColor = '#14b8a6';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = 'rgba(20, 184, 166, 0.5)';
            }}
          >
            GitHub →
          </a>
        )}
        {project.type === 'internship' && (
          <span style={{
            padding: '0.6rem 1.25rem',
            background: 'rgba(100, 116, 139, 0.2)',
            color: '#94a3b8',
            borderRadius: '6px',
            fontSize: '0.875rem',
            fontWeight: '600'
          }}>
            Internship Project
          </span>
        )}
      </div>
    </div>
  );
};


const ResumeSection = () => {
  return (
    <section
      id="resume"
      style={{
        minHeight: '80vh',
        padding: '6rem 2rem',
        background: 'rgba(15, 23, 42, 0.18)'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: '700', color: '#e8eaed', marginBottom: '1rem' }}>
          Resume
        </h2>

        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>
          Stack: React, Node, JavaScript, SQL, PostgreSQL, PHP, Laravel, Flask, Django, DSA in Python
        </p>
        <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>
          Languages: Kinyarwanda; Japanese (BJT 430); English (TOEIC 930)
        </p>

        <div style={{ marginBottom: '1.25rem' }}>
          <object data="/Resume-Brice.pdf" type="application/pdf" width="100%" height="600">
            <p style={{ color: '#9ca3af' }}>
              Your browser does not support embedded PDFs. <a href="/cv.pdf" style={{ color: '#14b8a6' }}>Download the CV</a> instead.
            </p>
          </object>
        </div>

        <div>
          <a href="/Resume-Brice.pdf" download style={{ padding: '0.65rem 1.2rem', background: '#14b8a6', color: '#0a0e27', textDecoration: 'none', borderRadius: '8px', fontWeight: '600' }}>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};



const ContactSection = () => {
  return (
    <section
      id="contact"
      style={{
        minHeight: '70vh',
        padding: '6rem 2rem',
        background: 'rgba(15, 23, 42, 0.3)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#e8eaed'
          }}>
            Let's Work Together
          </h2>
          <p style={{
              fontSize: '1.125rem',
              color: '#9ca3af',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Open to conversations about backend development, learning, and collaboration.
            </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <ContactCard
            icon="📧"
            label="Email"
            value="bricealibyilingiro@gmail.com"
            link="mailto:bricealibyilingiro@gmail.com"
          />
          <ContactCard
            icon="💻"
            label="GitHub"
            value="github.com/Brice-art"
            link="https://github.com/Brice-art"
          />
          <ContactCard
            icon="💼"
            label="LinkedIn"
            value="Connect on LinkedIn"
            link="https://www.linkedin.com/in/brice-ali-byiringiro-ab1182254/"
          />
        </div>

        {/* Quick Facts */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.6)',
          border: '1px solid rgba(20, 184, 166, 0.2)',
          borderRadius: '12px',
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Location</div>
            <div style={{ fontSize: '1rem', color: '#e8eaed', fontWeight: '600' }}>Remote / Rwanda</div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Languages</div>
            <div style={{ fontSize: '1rem', color: '#e8eaed', fontWeight: '600' }}>Kinyarwanda; Japanese (BJT 430); English (TOEIC 930)</div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Work Style</div>
            <div style={{ fontSize: '1rem', color: '#e8eaed', fontWeight: '600' }}>Remote OK</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, label, value, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'block',
      padding: '2rem',
      background: 'rgba(15, 23, 42, 0.6)',
      border: '1px solid rgba(20, 184, 166, 0.2)',
      borderRadius: '12px',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      textAlign: 'center'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.5)';
      e.currentTarget.style.boxShadow = '0 12px 30px rgba(20, 184, 166, 0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.2)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
    <div style={{
      fontSize: '0.75rem',
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '0.5rem'
    }}>
      {label}
    </div>
    <div style={{
      fontSize: '0.875rem',
      color: '#14b8a6',
      fontWeight: '600',
      wordBreak: 'break-word'
    }}>
      {value}
    </div>
  </a>
);


const Footer = () => (
  <footer style={{
    borderTop: '1px solid rgba(20, 184, 166, 0.2)',
    padding: '2rem',
    textAlign: 'center',
    fontSize: '0.875rem',
    color: '#6b7280',
    background: '#0a0e27'
  }}>
    <p>©Copyright 2026 Brice Byiringiro</p>
    <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>
      Remote / Rwanda
    </p>
  </footer>
);

const Portfolio = () => (
  <>
    <GlobalStyles />
    <Nav />
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
    <ResumeSection />
    <ContactSection />
    <Footer />
  </>
);

export default Portfolio;
