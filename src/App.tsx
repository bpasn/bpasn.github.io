import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Portfolito from './components/Portfolito';
import Experience from './components/Experience';
function App() {
  return (
    <Layout>
      <Hero />
      <Portfolito/>
      <Experience/>
      <Contact />
    </Layout>
  );
}

export default App;
