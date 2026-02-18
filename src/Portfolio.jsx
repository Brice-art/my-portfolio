import React, { useState, useEffect } from 'react';


const Portfolio = () => {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: '#0a0e27',
      color: '#e8eaed',
      minHeight: '100vh'
    }}>
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

const Navigation = () => {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      background: 'rgba(10, 14, 39, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(20, 184, 166, 0.2)',
      padding: '1rem 2rem',
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          color: '#14b8a6'
        }}>
          Brice.Dev
        </div>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Skills', 'Work', 'Contact'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: '#9ca3af',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#14b8a6'}
              onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
            >
              {item}
            </a>
          ))}
        </div>
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
          BASED IN TOKYO, JAPAN
        </div>

        <h1 style={{
          fontSize: '4rem',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em'
        }}>
          I've always loved solving <span style={{ color: '#14b8a6' }}>math problems</span>
        </h1>

        <h2 style={{
          fontSize: '2rem',
          fontWeight: '500',
          color: '#9ca3af',
          lineHeight: '1.4',
          marginBottom: '2rem'
        }}>
          Turns out coding is the same game with different rules. Pretty fun.
        </h2>

        <p style={{
          fontSize: '1.125rem',
          color: '#d1d5db',
          lineHeight: '1.8',
          marginBottom: '3rem',
          maxWidth: '700px'
        }}>
          Full-stack developer based in Tokyo. I build web applications with React, Node.js, Python, and PHP. 
          Started with civil engineering, discovered I prefer building digital systems.
        </p>

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
      skills: ['React', 'JavaScript', 'HTML/CSS'],
      color: '#14b8a6'
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'PHP'],
      color: '#06b6d4'
    },
    {
      category: 'Database',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
      color: '#8b5cf6'
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'AWS'],
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
      description: 'Agakayi is a simple React-based note app inspired by the traditional Rwandan “agakayi” notebook. While the original was used to track debts, this version is designed for capturing ideas, reminders, and everyday thoughts. Built as part of my journey learning React.',
      tech: ['React', 'Node.js', 'MongoDB'],
      status: 'Live',
      statusColor: '#22c55e',
      link: 'https://agakayi.xyz', 
      github: 'https://github.com/Brice-art/Agakayi',
      type: 'personal',
      highlight: 'Live Production App'
    },
    {
      title: 'MyStore',
      description: 'A prototype e-commerce application developed as part of my exploration of PHP backend development and relational database design. The goal was to understand the core mechanics behind online retail systems.',
      tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
      status: 'In Development',
      statusColor: '#f59e0b',
      link: null,
      github: 'https://github.com/Brice-art/ecommerce-site-php-mysql',
      type: 'personal',
      highlight: 'Full E-commerce System'
    },
    {
      title: 'Shift Management System',
      description: 'Automated shift scheduling system solving real problems from part-time work. Built during one-week intensive internship using no-code platform.',
      tech: ['AppSuite', 'desknet\'s Neo'],
      status: 'Completed',
      statusColor: '#14b8a6',
      link: null,
      github: null,
      type: 'internship',
      company: 'NEOJAPAN',
      duration: '1 Week',
      highlight: 'Team-work & Rapid learning'
    },
    {
      title: 'Full-Stack Web Application',
      description: 'Complete web application built from scratch during intensive internship. Learned Flask framework, AWS deployment, and SQL integration in one week.',
      tech: ['Flask', 'Python', 'AWS', 'SQL'],
      status: 'Completed',
      statusColor: '#14b8a6',
      link: null,
      github: null,
      type: 'internship',
      company: 'JOUHOU GIKEN',
      duration: '1 Week',
      highlight: 'Rapid Learning & Deployment'
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


const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'One Week to Build an App: NEOJAPAN Internship',
      date: 'August 2025',
      readTime: '4 min read',
      excerpt: 'What I learned building a shift management system in 4 days with zero experience in the platform.',
      content: `
Day 1: "What's AppSuite?"
Day 5: "Here's a working shift management system."

That was my NEOJAPAN internship in a nutshell.

**The Problem We Solved:**
As part-time workers, we all hated manual shift scheduling. Workers got unfair hours, managers wasted time juggling spreadsheets, and coverage gaps happened constantly.

We decided to fix it.

**The Constraint:**
One week. Four people. A no-code platform none of us had used before.

**What We Built:**
- Automated shift assignment based on availability
- Fair distribution algorithm (no one gets stuck with all the bad shifts)
- Coverage validation (system won't let you under-staff)
- Real-time updates for everyone

**What I Learned:**

*Day 1-2: Panic Learning*
- Read every AppSuite doc I could find
- Built toy examples to understand the logic
- Realized it's not about the tool, it's about the system design

*Day 3: Problem Modeling*
- Mapped the shift scheduling as a constraint satisfaction problem
- Workers = nodes, shifts = edges, fairness = optimization function
- This mental model made everything click

*Day 4-5: Build & Debug*
- Implement core logic
- Test with real scenarios
- Fix bugs we didn't anticipate
- Deploy and demo

**The Real Win:**
We identified a real problem from our own experience, designed a solution that enforced correctness, and built it fast.

That's the skill I want to bring to every project: see the problem clearly, model it correctly, build it quickly.

**Takeaway:**
Tools matter less than thinking. We could've built this in React or Python. The platform was just the medium. The problem-solving was the game.
      `,
      tags: ['Internship', 'Learning']
    }
  ];

  return (
    <section
      id="blog"
      style={{
        minHeight: '100vh',
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
          Learning Out Loud
        </h2>
        <p style={{
          fontSize: '1rem',
          color: '#9ca3af',
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          Thoughts on learning to code, building projects, and solving problems
        </p>

        {/* Blog Posts Grid */}
        {!selectedPost ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {blogPosts.map((post) => (
              <BlogPostCard 
                key={post.id} 
                post={post}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>
        ) : (
          <BlogPostFull 
            post={selectedPost}
            onBack={() => setSelectedPost(null)}
          />
        )}
      </div>
    </section>
  );
};

const BlogPostCard = ({ post, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(15, 23, 42, 0.6)',
        border: '1px solid rgba(20, 184, 166, 0.2)',
        borderRadius: '12px',
        padding: '2rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        borderColor: hovered ? 'rgba(20, 184, 166, 0.5)' : 'rgba(20, 184, 166, 0.2)',
        boxShadow: hovered ? '0 12px 30px rgba(20, 184, 166, 0.15)' : 'none'
      }}
    >
      {/* Date and read time */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
        fontSize: '0.75rem',
        color: '#6b7280'
      }}>
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '700',
        color: '#e8eaed',
        marginBottom: '0.75rem',
        lineHeight: '1.4'
      }}>
        {post.title}
      </h3>

      {/* Excerpt */}
      <p style={{
        fontSize: '0.875rem',
        color: '#9ca3af',
        lineHeight: '1.6',
        marginBottom: '1rem'
      }}>
        {post.excerpt}
      </p>

      {/* Tags */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}>
        {post.tags.map((tag, i) => (
          <span
            key={i}
            style={{
              padding: '0.25rem 0.5rem',
              background: 'rgba(20, 184, 166, 0.1)',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              borderRadius: '4px',
              fontSize: '0.7rem',
              color: '#14b8a6',
              fontWeight: '500'
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Read more indicator */}
      <div style={{
        marginTop: '1rem',
        color: '#14b8a6',
        fontSize: '0.875rem',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        Read more 
        <span style={{
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          transition: 'transform 0.2s ease'
        }}>
          →
        </span>
      </div>
    </div>
  );
};

const BlogPostFull = ({ post, onBack }) => {
  return (
    <div style={{
      background: 'rgba(15, 23, 42, 0.6)',
      border: '1px solid rgba(20, 184, 166, 0.2)',
      borderRadius: '12px',
      padding: '3rem',
      maxWidth: '700px',
      margin: '0 auto'
    }}>
      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          background: 'transparent',
          border: 'none',
          color: '#14b8a6',
          fontSize: '0.875rem',
          fontWeight: '600',
          cursor: 'pointer',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 0',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateX(-4px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}
      >
        ← Back to posts
      </button>

      {/* Post header */}
      <div style={{
        borderBottom: '1px solid rgba(20, 184, 166, 0.2)',
        paddingBottom: '2rem',
        marginBottom: '2rem'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#e8eaed',
          marginBottom: '1rem',
          lineHeight: '1.3'
        }}>
          {post.title}
        </h1>

        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          fontSize: '0.875rem',
          color: '#6b7280',
          marginBottom: '1rem'
        }}>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <div style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}>
          {post.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                padding: '0.4rem 0.75rem',
                background: 'rgba(20, 184, 166, 0.1)',
                border: '1px solid rgba(20, 184, 166, 0.3)',
                borderRadius: '4px',
                fontSize: '0.75rem',
                color: '#14b8a6',
                fontWeight: '500'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Post content */}
      <div style={{
        color: '#d1d5db',
        fontSize: '1rem',
        lineHeight: '1.8',
        whiteSpace: 'pre-line'
      }}>
        {post.content.split('\n').map((paragraph, i) => {
          // Handle bold text
          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
            return (
              <h3 key={i} style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                color: '#e8eaed',
                marginTop: '2rem',
                marginBottom: '1rem'
              }}>
                {paragraph.replace(/\*\*/g, '')}
              </h3>
            );
          }
          
          // Handle italic emphasis
          if (paragraph.startsWith('*') && paragraph.endsWith('*') && !paragraph.startsWith('**')) {
            return (
              <h4 key={i} style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#14b8a6',
                marginTop: '1.5rem',
                marginBottom: '0.5rem'
              }}>
                {paragraph.replace(/\*/g, '')}
              </h4>
            );
          }
          
          // Handle list items
          if (paragraph.trim().startsWith('-')) {
            return (
              <div key={i} style={{
                paddingLeft: '1.5rem',
                marginBottom: '0.5rem',
                color: '#9ca3af'
              }}>
                {paragraph}
              </div>
            );
          }
          
          // Regular paragraphs
          if (paragraph.trim()) {
            return (
              <p key={i} style={{
                marginBottom: '1rem'
              }}>
                {paragraph}
              </p>
            );
          }
          
          return null;
        })}
      </div>
    </div>
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
            Starting April 2026 in Tokyo. Looking for opportunities to build, learn, and grow.
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
            <div style={{ fontSize: '1rem', color: '#e8eaed', fontWeight: '600' }}>Tokyo, Japan</div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Languages</div>
            <div style={{ fontSize: '1rem', color: '#e8eaed', fontWeight: '600' }}>EN • JP • RW</div>
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
      Tokyo, Japan
    </p>
  </footer>
);

export default Portfolio;
