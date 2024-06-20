import React from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
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
    <AnimatePresence>
      <motion.section
        variants={variant}
        whileInView="animate"
        initial="initial"
        id="about"
        className='container m-auto p-[8rem_1rem_0_1rem] w-full'
      >
        <motion.h1 className="text-white text-4xl font-bold  mb-8">About</motion.h1>
        <motion.ul className='relative ul-style flex gap-2 justify-center'>
          <motion.li className="list-item text-md md:text-2xl about-me relative">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, nemo delectus cum excepturi eligendi debitis dignissimos modi perspiciatis consectetur cupiditate harum molestiae cumque voluptatum libero autem amet! Explicabo natus, beatae omnis distinctio vel libero suscipit magni! Adipisci, magni voluptate dolores totam eum, deserunt atque sit cumque necessitatibus quasi sint voluptatum.</motion.li>
        </motion.ul>
      </motion.section>
    </AnimatePresence>
  );
};


export default About;