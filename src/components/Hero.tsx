import React from 'react';
import Banner from '../assets/image/profile-removebg-preview.png';
import Button from '../ui/components/button';
import { motion, Variants } from 'framer-motion';
const Hero = () => {
  const variant: Variants = {
    initial: {
      y: -300,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      }
    },
  };

  return (
    <section id='hero' className='container h-screen'>
      <div className="scroll-mt-[100px] grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-10 place-content-center  h-full relative" >
        <motion.div
          animate="animate"
          variants={variant}
          initial="initial"
          className=' relative col-span-4 md:col-span-2 self-center order-2'>
          <img
            src={Banner}
            alt="SVG Logo"
            className='w-[1240px] object-cover'
          />
        </motion.div>
        <motion.div
          variants={variant}
          initial="initial"
          animate="animate"
          className='col-span-4 md:col-span-2 order-1 md:order-2 mt-[3.9rem] md:mb-0 place-content-center'
        >
          <motion.p
            variants={variant}
            className="text-md md:text-2xl row-span-1 uppercase font-sukhumvit tracking-[0.5rem] text-primary font-bold">
            Pirunporn Aiamsoongnoen
          </motion.p>
          <motion.p
            variants={variant}
            className="text-[30px] md:text-7xl text-wrap row-span-2 md:mt-[2rem]">
            Web developer and UI designer
          </motion.p>
          <Button text='See the  lastes workes' onClick={() => {
            window.location.href = '/#about'
          }} className='mt-5 md:mt-10' />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;