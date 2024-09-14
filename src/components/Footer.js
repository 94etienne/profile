// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
<footer style={{ padding: '20px', backgroundColor: '#000', textAlign: 'center', color: 'white' }}>
  <p>Email: <a href="mailto:ntambaraienne94@gmail.com" style={{ color: 'white' }}>ntambaraienne94@gmail.com</a></p>
  <p>I am open to work in multiple jobs for Master in AI</p>
  <p>
    <a href="https://wa.me/250783716761" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
      WhatsApp
    </a>
    <a href="https://x.com/NtambaraEtienne" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
      Twitter
    </a>
    <a href="https://www.linkedin.com/in/ntambara-etienne-7572901aa/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
      LinkedIn
    </a>
    <a href="https://www.facebook.com/profile.php?id=100004721655186" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
      Facebook
    </a>
  </p>
</footer>


  );
}

export default Footer;
