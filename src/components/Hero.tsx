import React from 'react';
import Banner from '../assets/image/profile.jpeg';
import Button from '../ui/components/button';
import { motion, Variants } from 'framer-motion';
const Hero = () => {
  const variant: Variants = {
    initial: {
      x: 300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      }
    },
  };
  return (
    <section id='hero' className='h-screen max-w-[890px]'>
      <div className=" mt-[56px] grid grid-cols-4 gap-2 md:gap-10 place-content-center h-full relative" >
        <motion.div
          animate="animate"
          variants={variant}
          initial="initial" 
          className='col-span-4 md:col-span-2 self-center order-2'>
          <img
            src={Banner}
            alt="SVG Logo"
            className='object-cover h-[500px] '
          />
        </motion.div>
        <motion.div
          variants={variant}
          initial="initial"
          animate="animate"
          className='col-span-4 md:col-span-2 order-1 md:order-2 mb-5 md:mb-0'
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
          <Button text='See the  lastes workes' className='mt-5 md:mt-10' />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;