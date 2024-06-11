import Card from '../ui/components/card'
import React from 'react'
import json from '../assets/json/project.json'
type Props = {}

const About = (props: Props) => {
  return (
    <section id="about" className='h-screen'>
      <h1 className="text-white text-4xl font-bold  mb-[5rem]">About</h1>
      <ul className='ul-style'>
        <li className="before:contents">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, nemo delectus cum excepturi eligendi debitis dignissimos modi perspiciatis consectetur cupiditate harum molestiae cumque voluptatum libero autem amet! Explicabo natus, beatae omnis distinctio vel libero suscipit magni! Adipisci, magni voluptate dolores totam eum, deserunt atque sit cumque necessitatibus quasi sint voluptatum.</li>
      </ul>
    </section>
  )
}

export default About