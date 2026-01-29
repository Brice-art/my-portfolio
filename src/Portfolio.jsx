import React, { useState, useEffect } from 'react';

// ============================================================================
// SIMPLE, HONEST PORTFOLIO
// "Math problems are fun. Coding problems are the same game."
// ============================================================================

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

// ============================================================================
// NAVIGATION
// ============================================================================
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

// ============================================================================
// HERO SECTION
// ============================================================================
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
            <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Starting Position</div>
          </div>
        </div>

        {/* CTA buttons */}
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

// ============================================================================
// SKILLS SECTION
// ============================================================================
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
      skills: ['MySQL', 'MongoDB'],
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

// ============================================================================
// PROJECTS SECTION
// ============================================================================
const ProjectsSection = () => {
  const projects = [
    {
      title: 'NotesApp',
      description: 'A full-stack note-taking application with real-time updates and user authentication. Built to practice MERN stack development.',
      tech: ['React', 'Node.js', 'MongoDB'],
      status: 'Live',
      statusColor: '#22c55e',
      link: 'https://notes-app-frontend-five-rho.vercel.app', // Replace with actual URL
      github: 'https://github.com/Brice-art/NotesApp',
      type: 'personal',
      highlight: 'Live Production App'
    },
    {
      title: 'MyStore',
      description: 'E-commerce web application with product catalog, shopping cart, and admin panel. Learning PHP backend development and MySQL database design.',
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
      highlight: 'Solved Real Business Problem'
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

// ============================================================================
// BLOG SECTION
// ============================================================================
const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'From Civil Engineering to Code',
      date: 'January 2026',
      readTime: '5 min read',
      excerpt: 'Why I switched from building physical structures to building software systems, and what civil engineering taught me about problem-solving.',
      content: `
I spent years studying civil engineering at Saitama University, learning about structural analysis, load calculations, and constraint-based design. The whole field is about understanding systems under pressure and making sure things don't break.

Turns out, that's exactly what coding is.

The switch happened when I realized I enjoyed the problem-solving part more than the physical construction part. In civil engineering, you're constrained by physics, materials, and budgets. In software, you're constrained by logic, performance, and user needs.

Same game. Different medium.

**What Civil Engineering Taught Me:**
- Everything is a system with constraints
- Start with the requirements, work backwards
- Test your assumptions before building
- Document everything (or regret it later)
- Simple solutions are usually better than complex ones

**What I'm Still Learning:**
- How to write code that others can actually read
- When to optimize vs. when to ship
- How to debug when the error message makes no sense
- Balancing perfectionism with practicality

The biggest mindset shift? In civil engineering, you build once and it lasts decades. In software, you iterate constantly. I'm still adjusting to that speed.

But I'm having more fun solving problems with code than I ever did with concrete.
      `,
      tags: ['Career', 'Learning']
    },
    {
      id: 2,
      title: 'One Week to Build an App: NEOJAPAN Internship',
      date: 'August 2025',
      readTime: '4 min read',
      excerpt: 'What I learned building a shift management system in 7 days with zero experience in the platform.',
      content: `
Day 1: "What's AppSuite?"
Day 7: "Here's a working shift management system."

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

*Day 3-4: Problem Modeling*
- Mapped the shift scheduling as a constraint satisfaction problem
- Workers = nodes, shifts = edges, fairness = optimization function
- This mental model made everything click

*Day 5-7: Build & Debug*
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
    },
    {
      id: 3,
      title: 'Building NotesApp: My First MERN Stack Project',
      date: 'November 2025',
      readTime: '6 min read',
      excerpt: 'The mistakes I made, the things I learned, and why deploying to production taught me more than any tutorial.',
      content: `
NotesApp was supposed to be a simple weekend project. "Just a CRUD app with React and Node.js," I thought.

It took three weeks and taught me more than six months of tutorials.

**What I Wanted to Build:**
A note-taking app where you can:
- Create, edit, delete notes
- Organize by categories
- Search and filter
- User authentication

Simple, right?

**What Actually Happened:**

*Week 1: The Easy Part*
- Set up React frontend: Easy
- Created Node.js backend: Easy
- Connected to MongoDB: Easy
- Basic CRUD operations: Easy

I thought I was done. I was an idiot.

*Week 2: The Reality Check*
- "Wait, anyone can delete anyone's notes?"
- Added user authentication (JWT tokens)
- "Wait, tokens expire and users get logged out mid-note?"
- Implemented refresh tokens
- "Wait, the app crashes if MongoDB is down?"
- Added proper error handling

*Week 3: The Production Hell*
- Deployed backend to Railway (not as simple as localhost)
- Deployed frontend to Vercel (environment variables are confusing)
- CORS issues (of course)
- Database connection timeouts (why does this work locally but not in prod?)

**What I Learned:**

*Technical:*
- How JWT authentication actually works (not just copy-paste)
- Why you need proper error boundaries
- Database connection pooling matters
- Environment variables are not optional
- CORS is everyone's enemy

*Non-Technical:*
- Building locally ≠ production-ready
- Users will do things you never expected
- Documentation is hard but necessary
- "It works on my machine" is not a valid excuse

**The Best Part:**
It's live. Real people (okay, just my friends) use it. When something breaks, I have to fix it. That's infinitely more valuable than tutorial hell.

**Current Status:**
- ~500 lines of backend code
- ~800 lines of frontend code
- Hosted on real servers
- Actually works (most of the time)

**Next Steps:**
- Add markdown support
- Implement real-time sync
- Mobile-responsive design improvements
- Better search functionality

But honestly? Just having a live app that people can use is already a win.

**Takeaway:**
Tutorials teach you syntax. Production teaches you systems. Deploy early, deploy often, and learn from real users.
      `,
      tags: ['Project', 'MERN', 'Learning']
    },
    {
      id: 4,
      title: 'Math Problems vs Code Problems: Same Game',
      date: 'December 2025',
      readTime: '3 min read',
      excerpt: 'Why solving a math proof feels exactly like debugging code, and why that makes programming fun for me.',
      content: `
Here's what I realized: I love coding for the same reason I love math.

**Math Problem:**
"Prove that the sum of any two even numbers is even."

**Code Problem:**
"Why does this function return undefined instead of the user object?"

These feel identical to me.

**The Process:**

*Step 1: Understand the constraints*
- Math: What are we given? What do we need to prove?
- Code: What inputs do we have? What output do we expect?

*Step 2: Try the obvious thing*
- Math: Let n = 2k and m = 2j...
- Code: Add a console.log to see what's happening...

*Step 3: Hit a wall*
- Math: Wait, this doesn't work for negative numbers...
- Code: Oh, the function returns before reaching the user object...

*Step 4: Reframe the problem*
- Math: What if we think about this differently?
- Code: What if the issue is earlier in the call stack?

*Step 5: Aha moment*
- Math: Of course! n + m = 2(k + j), which is even by definition.
- Code: The async function isn't being awaited. That's why it's undefined.

**The Satisfaction:**
In both cases, you go from "this makes no sense" to "oh, obviously."

That dopamine hit when things click? That's why I code.

**The Difference:**
- Math proofs are elegant but abstract
- Code solutions are messy but real
- Math has one right answer
- Code has many working solutions

I prefer code because you can see your solution actually work. You don't just prove correctness—you deploy correctness.

**Why This Matters:**
A lot of people get into coding because "tech pays well" or "I want to build apps."

I got into coding because I missed the puzzle-solving from math class.

If you're like me—if you enjoyed proofs, logic puzzles, or finding patterns—you'll probably love debugging. It's the same mental game.

**Takeaway:**
Find what makes you excited about coding. For me, it's not the tech stack or the job market. It's the daily satisfaction of solving puzzles that actually ship.

If your reason is different, that's fine. But know your reason. It'll keep you going when you're stuck in dependency hell at 2 AM.
      `,
      tags: ['Mindset', 'Learning']
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

// ============================================================================
// CONTACT SECTION
// ============================================================================
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
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Start Date</div>
            <div style={{ fontSize: '1rem', color: '#e8eaed', fontWeight: '600' }}>April 2026</div>
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

// ============================================================================
// FOOTER
// ============================================================================
const Footer = () => (
  <footer style={{
    borderTop: '1px solid rgba(20, 184, 166, 0.2)',
    padding: '2rem',
    textAlign: 'center',
    fontSize: '0.875rem',
    color: '#6b7280',
    background: '#0a0e27'
  }}>
    <p>Built with React • 2026 Brice Byiringiro</p>
    <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>
      Tokyo, Japan
    </p>
  </footer>
);

export default Portfolio;