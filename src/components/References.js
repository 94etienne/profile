import React from 'react';

const Referees = () => {
  return (
    <section style={{ padding: '20px', backgroundColor: '#8c564b' }}>
      <h2>Referees</h2>
      <ul>
        <li>Assoc Prof. Adams Wai Kin Kong - Nanyang Technological University, <a className='text-white' href="mailto:adamskong@ntu.edu.sg">adamskong@ntu.edu.sg</a></li>
        <li>Dr. Alfred UWITONZE - Dean of School of ICT at the University of Rwanda, <a className='text-white' href="mailto:alfruwitonze@gmail.com">alfruwitonze@gmail.com</a></li>
        <li>Mr. Andre UZAMURENGERA - Data Scientist at Centre Bank of Rwanda, <a className='text-white' href="uzandre12@gmail.com">uzandre12@gmail.com</a></li>
        <li>NGABO Desire - Head of Laboratories in the African Center of Excellence in the Internet of things (ACEIoT)/University of Rwanda, Lecturer at the University of Rwanda, <a className='text-white' href="dngabo@gmail.com">dngabo@gmail.com</a></li>
        {/* Add other referees similarly */}
      </ul>
    </section>
  );
};

export default Referees;
