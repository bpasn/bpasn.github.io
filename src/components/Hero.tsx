import React from 'react';
import Banner from '../assets/image/banner.svg';
import Button from '../ui/components/button';
import { motion, Variants } from 'framer-motion';
const Hero = () => {
  const variant: Variants = {
    initial: {
      x: -300,
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
    <section id='hero' className='h-screen flex items-center'>
      <div className="m-auto container w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-10 h-full place-content-center relative" >
          <motion.div
            whileInView="animate"
            variants={variant}
            initial="initial"
            className=' relative col-span-4 md:col-span-2 self-center order-2'>
            <img
              src={Banner}
              alt="SVG Logo"
              className='w-full object-cover'
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
              Web developer
            </motion.p>
            <Button text='Download Resume' onClick={handleDownload} className='mt-5 md:mt-10' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const handleDownload = () => {
  let link: HTMLAnchorElement = document.createElement<"a">('a');

  let file = '/pdf/Resume.pdf';
  link.href = file; // URL ของไฟล์ที่ต้องการดาวน์โหลด
  link.download = 'Resume.pdf'; // ชื่อไฟล์ที่จะถูกดาวน์โหลด
  // คลิกที่ลิงก์เพื่อดาวน์โหลดไฟล์
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);


}
export default Hero;