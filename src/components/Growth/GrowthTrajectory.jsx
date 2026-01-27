import React from 'react';

const GrowthTrajectory = () => {
  const milestones = [
    {
      year: '2024',
      title: 'Learned to Code',
      description: 'Self-taught through intensive study. Built first projects.'
    },
    {
      year: '2025',
      title: '2 Internships',
      description: 'NEOJAPAN & JOUHOU GIKEN. Built real-world applications under pressure.'
    },
    {
      year: '2026',
      title: 'Now',
      description: 'Full-time software engineer in Tokyo. Ready to build and grow.'
    }
  ];

  return (
    <section
      id="growth"
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
          My Journey
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem'
        }}>
          {milestones.map((milestone, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(20, 184, 166, 0.2)',
                borderRadius: '12px',
                padding: '2rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                borderLeft: '4px solid #14b8a6'
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.75rem'
                }}
              >
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#e8eaed',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {milestone.title}
                  </h3>
                </div>
                <span
                  style={{
                    fontSize: '0.875rem',
                    color: '#14b8a6',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                    marginLeft: '1rem'
                  }}
                >
                  {milestone.year}
                </span>
              </div>
              <p style={{
                fontSize: '0.95rem',
                color: '#d1d5db',
                lineHeight: '1.6',
                margin: 0
              }}>
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthTrajectory;
