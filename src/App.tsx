import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero/Hero';
import Project from './components/Project/Project';
import SocialIcon from './components/SocialIcon/SocialIcon';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import DialogComponent from './components/Project/components/DialogComponent';
import { DialogProvider, useDialogContext } from './context/dialog-context';
import MyDialog from './components/Project/components/DialogComponent';

function App() {
  return (
    <DialogProvider>
      <Layout>
        <MyDialog />
        <Hero />
        <Project />
        <About />
        <SocialIcon />
        <Experience />
        <Contact />
      </Layout>
    </DialogProvider>
  );
}

export default App;
