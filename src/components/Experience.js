import React from 'react';

const Experience = () => {
  return (
    <section style={{ padding: '20px', backgroundColor: '#2ca02c' }}>
      <h2>Experience</h2>
      <ul>
        <li>
          <strong>African Center of Excellence in Internet of Things (ACEIoT)</strong> - Volunteer, August 2024 - Now
          <p>I am currently developing a system that will control Lab accessories from renting to returning, using React.js, Node.js, and MYSQL.</p>
        </li>
        <li>
          <strong>Mineduc</strong> - Computer Science Teacher, Rwanda Basic Education Board, Bugesera District, October 2022 - September 2023
          <p>Taught Computer Science and ICT in Advanced and Ordinary Levels, served as CAMIS Data Manager.</p>
          {/* <p><a href="#" target="_blank" rel="noopener noreferrer">View Job Starting Letter</a></p> */}
          {/* <p><a href="#" target="_blank" rel="noopener noreferrer">View Job Service Certificate</a></p> */}
        </li>
        <li>
          <strong>Rwanda Basic Education Board</strong> - Intern, May 2022 - September 2022
          <p>Teacher Management Information System (TMIS) Trainer, provided other ICT-related services.</p>
        </li>
        <li>
          <strong>Algorithm Inc</strong> - Academic Intern, December 2020 - February 2021
          <p>Software Developer on E-Prescription System.</p>
          {/* <p><a href="https://shorturl.at/TI9Bw" target="_blank" rel="noopener noreferrer">View Internship Certificate</a></p> */}
        </li>
        <li>
          <strong>UR-CST</strong> - Researcher and Developer, June 2019 - December 2021
          <p>Conducted research on resource monitoring and management, developed a web application for Open Inventory Management System (OIMS).</p>
          {/* <p><a href="#" target="_blank" rel="noopener noreferrer">Developed Website: Click to View</a></p> */}
        </li>
        <li>
          <strong>Computer Innovation Technology Ltd</strong> - Trainer, April 2022 - May 2022
          <p>Trainer of RWANDA TVET BOARD students in system development courses.</p>
          <p><a style={{color:'white'}} href="https://citttech.com/" target="_blank" rel="noopener noreferrer">Developed Website</a></p>
        </li>
        <li>
          <strong>IREMBO</strong> - Irembo Agent, September 2016 - Now
          <p>Delivering Irembo services to the Rwandan population.</p>
          {/* <p><a href="https://shorturl.at/3ZEhl" target="_blank" rel="noopener noreferrer">View Irembo Certificate</a></p> */}
        </li>
        <li>
          <strong>MobiCash</strong> - MobiCash Agent, 2016 - 2022
          <p>Delivering MobiCash services to the Rwandan population by assisting with service payments.</p>
          {/* <p><a href="https://shorturl.at/4XFrF" target="_blank" rel="noopener noreferrer">View MobiCash Contract</a></p> */}
        </li>
      </ul>
    </section>
  );
};

export default Experience;
