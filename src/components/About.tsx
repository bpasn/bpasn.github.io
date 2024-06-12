import React from 'react';
import skills from '../assets/json/skill.json';
import ListCard from '../ui/components/list-card';
import { motion } from 'framer-motion';
const About = () => {
  const variant = {
    initial: {
      x: -300,
      opacity: 1,
      transition: {
        duration: 1
      }
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };


  const preramid = () => {
    let element: React.JSX.Element[] = [];
    for (let i = 0; i < skills.length; i++) {
      for (let j = skills.length; j >= 1; j--) {
        if (i >= j) {
          element.push(
            <ListCard image={skills[i].image} skill={skills[i].skill} id={i} key={i} />
          );
        }
      }
    }
  };
  return (
    <section id="about" className='flex flex-col justify-center'>
      <motion.div className='  mb-[5rem]' whileInView={"animate"} initial={"initial"} variants={variant}>
        <motion.h1 className="text-white text-4xl font-bold font-sukhumvit mb-8">About</motion.h1>
        <motion.ul className='relative ul-style flex gap-2'>
          <motion.li className=' w-52 mt-3 border-t-2 border-t-primary'></motion.li>
          <motion.li className="list-item text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, nemo delectus cum excepturi eligendi debitis dignissimos modi perspiciatis consectetur cupiditate harum molestiae cumque voluptatum libero autem amet! Explicabo natus, beatae omnis distinctio vel libero suscipit magni! Adipisci, magni voluptate dolores totam eum, deserunt atque sit cumque necessitatibus quasi sint voluptatum.</motion.li>
        </motion.ul>
      </motion.div>

      <h1 className="text-white text-4xl font-bold  mb-[5rem] text-center">My Skills</h1>
      {skills.map((item, index) => {
          return (
            <motion.div className="col-start-2   bg-black col-end-3">
              <ListCard id={index} image={item.image} skill={item.skill} />
            </motion.div>
          );
        })}
      <div className="grid grid-cols-6 gap-4 bg-white">
          <div className="col-start-2   bg-black col-end-3 ...">02</div>
          <div className="col-end-6 bg-black col-span-2 ...">03</div>
          <div className="col-start-1  bg-black col-end-7 ...">04</div>
        </div>

    </section>
  );
};

export default About;