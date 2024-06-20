import React from 'react'
import About from './About'
import Skill from './Skill'
import Project from './Project'

const Portfolito = () => {
  return (
    <section id='portfolito' className='md:container px-[1rem] md:mx-auto'>
        <About />
        <Skill/>
        <Project/>
    </section>
  )
}

export default Portfolito