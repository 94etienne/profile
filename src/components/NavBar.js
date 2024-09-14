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
    setIsOpen(false); // Close navbar after click on mobile
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">NTAMBARA Etienne</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a onClick={() => scrollToSection('education')}>Education</a>
        <a onClick={() => scrollToSection('experience')}>Experience</a>
        <a onClick={() => scrollToSection('projects')}>Projects</a>
        <a onClick={() => scrollToSection('skills')}>Skills</a>
        <a onClick={() => scrollToSection('certificates')}>Certificates</a>
        <a onClick={() => scrollToSection('referees')}>Referees</a>
        <a onClick={() => scrollToSection('contact')}>Contact</a>
      </div>
      <div className="nav-icon" onClick={handleToggle}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
