import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Portfolito from './components/Portfolito';
function App() {
  return (
    <Layout>
      <Hero />
      <Portfolito />
      {/* <Experience/> */}
      <Contact />
    </Layout>
  );
}

export default App;
