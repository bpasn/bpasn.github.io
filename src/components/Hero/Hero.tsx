import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from 'react-animate-on-scroll';
import HeroImage from './components/HeroImage';
import Portfolio from '../../assets/image/portfolio.png'
import ScrollDown from './components/ScrollDown';
import ScrollDownSVG from '../../assets/image/scroll-down.svg';
import './hero.css';

const Hero = () => {
  const [showSubTitle, setShowSubTitle] = React.useState(false);
  return (
    <main className='bg-hero-pattern bg-[#151418] bg-no-repeat bg-cover w-full'>
      <section id='hero' className='hero-container'>
        <div className="hero-wrapper">
          <div className="hero-left">
            <ScrollAnimation animateIn='fadeIn' offset={0}>
              <TypeAnimation
                cursor={false}
                sequence={[
                  "Hi, I'm Boy, a Junior Full-Stack Developer.",
                  () => setShowSubTitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                wrapper='h1'
                repeat={0}
              />
              {/* <h1>Hi, I'm Boy, a Full-Stack Developer.</h1>
              <h5>Welcome to my portfolio website!
Here, you'll find detailed information about my experience, skills, and projects.</h5> */}
              {showSubTitle && (
                <TypeAnimation sequence={[500,
                  'Welcome to my portfolio website!',
                  500,
                  "Here, you'll find detailed information about my experience, skills, and projects.",
                  2000,
                  "you can scroll down to see my projects now...",
                  1000,
                  "See ya! :)",
                  500,]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper='h5'
                  repeat={Infinity}
                />
              )}
            </ScrollAnimation>
          </div>
          <div className="flex-1 justify-center flex">
            <ScrollAnimation animateIn={"fadeIn"} offset={-20}>
              <HeroImage src={Portfolio} alt='man-svgrepo' />
            </ScrollAnimation>
          </div>
        </div>
        <ScrollDown to='projects' id='scrollDown' offset={-100} scrolling='true'>
          <div className="flex items-center text-[1.3rem] text-[#f6f6f6]">
            Scroll down
            <img src={ScrollDownSVG} alt="scrollDown" className='h-[35px] w-[35px] ml-[6px]' />
          </div>
        </ScrollDown>
      </section>
    </main>
  );
};

export default Hero;