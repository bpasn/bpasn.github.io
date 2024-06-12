import React from 'react'
import Banner from '../assets/image/undraw_code_review_re_woeb.svg';
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
    scrollButton: {
      opacity: 1,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      }
    }
  }
  return (
    <section id='hero' className='h-screen'>
      <div className="grid grid-cols-4 gap-2 md:gap-10 place-content-center h-full " >
        <div className='pl-2 col-span-4 md:col-span-2 order-2 md:order-1'>
          <img
            src={Banner}
            alt="SVG Logo" />
        </div>
        <motion.div
          variants={variant}
          initial="initial"
          whileInView="animate"
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
          <Button text='See all my project' className='mt-5' />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero