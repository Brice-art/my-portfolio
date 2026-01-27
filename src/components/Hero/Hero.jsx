import React, { useState, useEffect } from 'react';
import heroImg from '../../assets/images/Brice Ali Profile.jpg';
import coverImg from '../../assets/images/Brice Cover photo.png';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      style={{
        background: '#0a0e27',
        paddingBottom: '3rem'
      }}
    >
      {/* Cover Photo */}
      <div
        style={{
          width: '100%',
          height: '350px',
          backgroundImage: `url(${coverImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      />

      {/* Profile Section */}
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative'
        }}
      >
        {/* Profile Card */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            borderRadius: '12px',
            padding: '3rem 2rem',
            marginTop: '-80px',
            position: 'relative',
            zIndex: 10,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease'
          }}
        >
          {/* Profile Pic - Left Side */}
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'flex-start',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ flex: '0 0 auto' }}>
              <img
                src={heroImg}
                alt="Brice Ali Byiringiro"
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  border: '2px solid rgba(20, 184, 166, 0.3)'
                }}
              />
            </div>

            {/* Info Section */}
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h1
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#e8eaed',
                  marginBottom: '0.5rem'
                }}
              >
                Brice Byiringiro
              </h1>

              <h2
                style={{
                  fontSize: '1.25rem',
                  color: '#14b8a6',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}
              >
                Full-Stack Developer
              </h2>

              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem',
                  color: '#9ca3af'
                }}
              >
                <span>Tokyo, Japan</span>
                <span>Available April 2026</span>
              </div>

              <p
                style={{
                  fontSize: '1rem',
                  color: '#d1d5db',
                  lineHeight: '1.6',
                  maxWidth: '600px'
                }}
              >
                I love solving math problems—and that's exactly why I love thinking through how to solve problems with code. It's the same puzzle, different medium. Very interesting. Strongly recommended.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <a
                  href="#contact"
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: '#14b8a6',
                    color: '#0a0e27',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
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
                  Get In Touch
                </a>
                <a
                  href="#skills"
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: 'transparent',
                    color: '#14b8a6',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    border: '1px solid rgba(20, 184, 166, 0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
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
                  View My Skills
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
