import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid rgba(99, 102, 241, 0.2)',
      padding: '3rem 2rem',
      textAlign: 'center',
      fontSize: '0.875rem',
      color: '#9ca3af',
      position: 'relative',
      zIndex: 1
    }}>
      <p>Built with React • Designed with constraints in mind</p>
      <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>
        © 2026 Brice Ali Byiringiro • Tokyo, Japan
      </p>
    </footer>
  );
};

export default Footer;
