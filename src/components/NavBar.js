import React, { useState } from 'react';
// import './Navbar.css'; // Import styles
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close navbar after clicking a link on mobile
  };

  const navItems = [
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'referees', label: 'Referees' },
    { id: 'office', label: 'Office' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo">NTAMBARA Etienne</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <div
            key={item.id}
            className="nav-link"
            role="button"
            tabIndex={0}
            onClick={() => scrollToSection(item.id)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') scrollToSection(item.id);
            }}
            style={{ cursor: 'pointer' }}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="nav-icon" onClick={handleToggle}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
