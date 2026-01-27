import React from 'react';

const Nav = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'growth', label: 'Journey' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      background: 'rgba(10, 14, 39, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(20, 184, 166, 0.2)',
      padding: '1rem 2rem',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {navItems.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveSection(item.id);
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              color: activeSection === item.id ? '#14b8a6' : '#9ca3af',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              position: 'relative'
            }}
          >
            {item.label}
            {activeSection === item.id && (
              <div style={{
                position: 'absolute',
                bottom: '-0.5rem',
                left: 0,
                right: 0,
                height: '2px',
                background: '#14b8a6'
              }} />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
