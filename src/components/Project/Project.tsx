import React from 'react'
import ProjectCard from './components/ProjectCard';
import './project.css';
import { EachElement } from 'lib/utils';
import projects from '../../json/projects.json';
const Project = () => {
  return (
    <section className='relative'>
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
          <EachElement
            of={projects}
            render={(project, index) => <ProjectCard id={index} {...project} />}
          />
        </div>
      </div>
    </section>
  )
}

export default Project