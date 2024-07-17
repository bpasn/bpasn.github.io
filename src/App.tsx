import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero/Hero';
import Project from './components/Project/Project';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import { DialogProvider } from './context/dialog-context';
import MyDialog from './components/Project/components/DialogComponent';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <DialogProvider>
      <Layout>
        <MyDialog />
        <Hero />
        <Project />
        <About />
        {/* <SocialIcon /> */}
        <Experience />
        <Contact />
        <ScrollToTop />

      </Layout>
    </DialogProvider>
  );
}

export default App;
