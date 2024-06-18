import React from 'react'
import About from './About'
import Skill from './Skill'
import Project from './Project'

const Portfolito = () => {
  return (
    <section id='portfolito' className='container'>
        <About />
        <Skill/>
        <Project/>
    </section>
  )
}

export default Portfolito