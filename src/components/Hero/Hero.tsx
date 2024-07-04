import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from 'react-animate-on-scroll';
import HeroImage from './components/HeroImage';
import Banner from '../../assets/image/profile-bg-preview-corp.png'
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
            <ScrollAnimation animateIn='fadeIn' offset={0} className='h-[140px]'>
              <TypeAnimation
                cursor={false}
                sequence={[
                  "Hi,I'm Pirunporn.",
                  () => setShowSubTitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper='h1'
                repeat={0}
              />
              {showSubTitle && (
                <TypeAnimation sequence={[500,
                  'A Full-Stack Developer.',
                  'A....',
                  1000,
                  'A.... cool guy?',
                  1000,
                  "Ok...",
                  1000,
                  "Ok...  I'm running out of ideas...",
                  1000,
                  "Uhh...",
                  1000,
                  "Uhh... you can scroll down to see my projects now...",
                  1000,
                  "Seriously, my projects are really cool, go check them out!",
                  1000,
                  "You're uh...",
                  1000,
                  "You're uh... still here?",
                  1000,
                  "Ok, this has been fun, but I'm gonna restart the loop now...",
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
            <ScrollAnimation animateIn={"fadeIn"}>
              <HeroImage src={Banner} alt='man-svgrepo' />
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