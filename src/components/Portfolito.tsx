import React from 'react'
import About from './About'
import Skill from './Skill'
import Project from './Project'
import Experience from './Experience'

const Portfolito = () => {
  return (
    <section id='portfolio' className='md:container px-[1rem] md:mx-auto'>
      <About />
      <Skill />
      <Project />
      <Experience/>
    </section>
  )
}

export default Portfolito