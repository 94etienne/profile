// import React from 'react';
// import Header from './components/Header';
// import Education from './components/Education';
// import Experience from './components/Experience';
// import Skills from './components/Skills';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Education />
//       <Experience />
//       <Skills />
//       <Contact />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Referees from './components/References';
import Projects from './components/Projects';
import './App.css';  // For background color
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <section id="referees">
        <Referees />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
