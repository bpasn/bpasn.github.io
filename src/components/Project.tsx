import React from 'react'
import projects from '../assets/json/project.json';
type Props = {}

const Project = (props: Props) => {
  return (
    <section id='project' className='relative m-[4rem_auto] p-[4rem_0] max-w-[960px]'>
      <h1 className="text-white text-4xl font-bold  mb-[5rem] text-center w-full">My Project</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {projects.map((e, i) => (
          <div key={i} className='relative border border-primary h-full  rounded-xl p-5 flex flex-col'>
            <div className=' w-full'>
              <img className='max-h-[130.19px] w-full object-contain' src={e.image} alt={e.title} />
            </div>
            <h1 className='mt-5 text-md md:text-lg font-bold'>{e.title}</h1>
            <div className="my-10">
              <p className=' text-sm md:text-md text-white'>{e.description.length > 200 ? e.description.slice(0, 200) + '...' : e.description}</p>
            </div>
            <div className="mt-auto gap-2 flex items-center justify-center text-sm">
              <a className="border border-none mt-auto shadow-2xl w-full bg-primary/80 rounded-full p-[.8rem] text-center" href={e.link} target='_blank' rel='noreferrer'>Live Preview</a>
              <a className="border border-primary/80 mt-auto shadow-2xl w-full  rounded-full p-[.8rem] text-gray-500 text-center" >Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project