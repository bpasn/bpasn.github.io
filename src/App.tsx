import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skill/>
      <Contact />
    </Layout>
  );
}

export default App;
