import React from 'react';
import ContactCard from './ContactCard';

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        minHeight: '80vh',
        padding: '3rem 2rem',
        background: '#0a0e27',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#e8eaed'
          }}>
            Let's Build Something
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#9ca3af',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Starting April 2026 in Tokyo. Open to opportunities where I can grow fast and contribute immediately.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <ContactCard
            label="Email"
            value="bricealibyilingiro@gmail.com"
            link="mailto:bricealibyilingiro@gmail.com"
          />
          <ContactCard
            label="GitHub"
            value="github.com/Brice-art"
            link="https://github.com/Brice-art"
          />
          <ContactCard
            label="LinkedIn"
            value="Connect on LinkedIn"
            link="https://www.linkedin.com/in/brice-ali-byiringiro-ab1182254/"
          />
        </div>

        {/* Quick Facts */}
        <div style={{
          background: 'rgba(20, 184, 166, 0.05)',
          border: '1px solid rgba(20, 184, 166, 0.2)',
          borderRadius: '12px',
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Location</div>
            <div style={{ fontSize: '1rem', color: '#e8eaed', fontWeight: '600' }}>Tokyo, Japan</div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Availability</div>
            <div style={{ fontSize: '1rem', color: '#e8eaed', fontWeight: '600' }}>April 2026</div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Languages</div>
            <div style={{ fontSize: '1rem', color: '#e8eaed', fontWeight: '600' }}>EN • JA • RW</div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Work Style</div>
            <div style={{ fontSize: '1rem', color: '#e8eaed', fontWeight: '600' }}>Remote-friendly</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
