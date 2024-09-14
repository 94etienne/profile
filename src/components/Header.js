import React from 'react';
import Navbar from './NavBar';  // Ensure the correct case in the file name

const Header = () => {
  return (
    <>
      <header style={{ padding: '20px', textAlign: 'center', backgroundColor: '#1f77b4', color: 'white' }}>
        <h1>NTAMBARA Etienne</h1>
        <p>+250-785227713 || +250-783716761</p>
        <p>Master of Science in Artificial Intelligence</p>
        <p>ntambaraienne94@gmail.com</p>
        <p>Computer Science and Engineering</p>
        <p>Nanyang Technological University (NTU-SINGAPORE)</p>
        <p>
          <a className='text-white' href="https://github.com/94etienne">Github</a> | 
          <a className='text-white' href="https://huggingface.co/ntam0001"> HuggingFace</a> | 
          <a className='text-white' href="https://www.linkedin.com/in/ntambara-etienne-7572901aa/"> LinkedIn</a>
        </p>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
