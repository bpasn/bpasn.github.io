import React from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import ManSvgRepo from '../../assets/image/man-svgrepo-com.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import json from './stack.json'
import './about.css';

const About = () => {
  const variant: Variants = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: .5,
        staggerChildren: 0.3,
      }
    },
  };
  return (
    <div className="warpper-content wrapper-about " id='about'>
      <div className="container">
        <div className="sectionTitle">About Me</div>
        <div className="big-card">
          <ScrollAnimation animateIn='fadeInLeft'>
            <img src={ManSvgRepo} className='' alt="svg" />
          </ScrollAnimation>
          <div className="aboutBio">
            <ScrollAnimation animateIn='fadeInLeft'>
              Hello! My name is <strong>Pedro Muniz</strong>. I'm originally from Brazil and have been living in Canada for the past three years. During my time here, I gained valuable experience through various entry-level positions, which greatly enhanced my work ethic, communication skills, and adaptability.
            </ScrollAnimation>

            <br /><br />

            <div className="techologies">
              {json.stacks.map((stack, index) => (
                <ScrollAnimation animateIn='fadeInLeft' key={index}>
                  <div className="tech" key={stack.name}>
                    <img className='tech-img' src={stack.img} alt={stack.name} />
                    <div className="tech-name">{stack.name}</div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;