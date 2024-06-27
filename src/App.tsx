import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero/Hero';
import Project from './components/Project/Project';
import SocialIcon from './components/SocialIcon/SocialIcon';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Project />
      <About />
      <SocialIcon />
      <Experience />
      <Contact />
    </Layout>
  );
}

export default App;
