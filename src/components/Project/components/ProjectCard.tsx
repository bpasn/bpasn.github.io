import React, { useState } from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import data from '../data/ProjectData.json';
import { useDialogContext } from '../../../context/dialog-context';
import ContentProject from './ContentProject';
interface IProject {
    img: string;
    title: string;
    description: string;
    tech_stack: string[];
    github_url: string;
    demo_url: string;
}
const ProjectCard = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [elementExpanded, setElementExpanded] = useState<number>();
    const dialogContext = useDialogContext();
    const handleClick = () => {
        dialogContext.setOpen(true);
        dialogContext.setContent(<ContentProject />)
    }


    return (
        <>
            {data.projects.map((project: IProject, index: number) => {
                
                return (
                    <ScrollAnimation animateIn="fadeInLeft" animatePreScroll key={index}>
                        <div className="card"  >
                            <div className="card-left" onClick={handleClick}>
                                <img src={project.img} alt={project.title} />
                            </div>
                            <div className="card-right">
                                <h1>{project.title}</h1>
                                <p className={`${expanded && elementExpanded === index ? "" : "truncate"}`}>{project.description}</p>
                                {project.description.length > 100 && (
                                    <span className="cursor-pointer my-5" onClick={() => {
                                        setExpanded(!expanded);
                                        setElementExpanded(index);
                                    }}>{expanded && elementExpanded === index ? "น้อยลง" : "เพิ่มเติม"}</span>)}
                                <div className='tech-card-container'>
                                    {project.tech_stack.map((tech) => (
                                        <div className="tech-stack" key={tech}>{tech}</div>
                                    ))}
                                </div>
                                <div className="btn-group">
                                    {project.github_url.length > 0 && (
                                        <a href={project.github_url} className="btn btn-secondary btn-shadow">
                                            Github
                                        </a>
                                    )}
                                    {project.demo_url.length > 0 && (
                                        <a
                                            className="btn btn-primary btn-shadow"
                                            href={project.demo_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Demo ➜
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                )
            })
            }
        </>
    )
}

export default ProjectCard