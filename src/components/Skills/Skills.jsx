import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'PHP']
    },
    {
      category: 'Database',
      skills: ['MySQL', 'MongoDB']
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'AWS']
    }
  ];

  return (
    <section
      id="skills"
      style={{
        minHeight: '60vh',
        padding: '3rem 2rem',
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
          marginBottom: '3rem',
          color: '#e8eaed',
          textAlign: 'center'
        }}>
          My Skills
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem'
        }}>
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(20, 184, 166, 0.2)',
                borderRadius: '12px',
                padding: '2rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.5)';
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.2)';
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.6)';
              }}
            >
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#14b8a6',
                marginBottom: '1rem'
              }}>
                {group.category}
              </h3>
              <div style={{
                display: 'flex',
                gap: '0.75rem',
                flexWrap: 'wrap'
              }}>
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(20, 184, 166, 0.1)',
                      border: '1px solid rgba(20, 184, 166, 0.3)',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      color: '#d1d5db',
                      fontWeight: '500'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
