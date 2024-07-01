import React from 'react';
import ManSvgRepo from '../../assets/image/man-svgrepo-com.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import json from './stack.json';
import './about.css';

const About = () => {
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
              Hello! My name is <strong>Pirunporn Aiamsoongnoen</strong>.
              I'm a developer with over 3 years of experience, adept at developing and deploying quality web solutions. I possess a solid foundation in both front-end and back-end development and have approximately 4-5 months of experience in mobile development. I have a strong willingness to learn and adapt to new technologies, always striving to improve my skills and contribute effectively to my team.
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