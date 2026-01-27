const ContactCard = ({ icon, label, value, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'block',
      padding: '2rem',
      background: 'rgba(20, 184, 166, 0.05)',
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
      wordBreak: 'break-all'
    }}>
      {value}
    </div>
  </a>
);

export default ContactCard;
