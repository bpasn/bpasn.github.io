import React from 'react'
// import projects from '../../assets/json/project.json';
import ProjectCard from './components/ProjectCard';
import './project.css';
const Project = () => {
  return (
    <section>
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <div className="-mt-[1px]">
        <div className="container max-w-mdl" id='projects'>
          <div className="sectionTitle">Project</div>
          <ProjectCard />
        </div>
      </div>
      {/* <h1 className="text-white text-4xl font-bold  mb-[5rem] text-center w-full">My Project</h1>
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
      </div> */}
    </section>
  )
}

export default Project