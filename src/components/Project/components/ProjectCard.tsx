import React, { useState } from 'react';
import ScrollAnimation from "react-animate-on-scroll";
interface IProjectProps {
    id: number;
    img: string;
    title: string;
    description: string;
    tech_stack: string[];
    github_url: string;
    demo_url: string;
}
const ProjectCard: React.FC<IProjectProps> = (props) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [elementExpanded, setElementExpanded] = useState<number>();
    const handleClick = () => {
    };

    return (
        <ScrollAnimation animateIn="fadeInLeft" animatePreScroll>
            <div className="card"  >
                <div className="card-left " onClick={handleClick}>
                    <img src={props.img} alt={props.title} />
                </div>
                <div className="card-right">
                    <h1>{props.title}</h1>
                    <p className={`${expanded && elementExpanded === props.id ? "" : "truncate"}`}>{props.description}</p>
                    {props.description.length > 100 && (
                        <span className="cursor-pointer my-5 underline underline-offset-4" onClick={() => {
                            setExpanded(!expanded);
                            setElementExpanded(props.id);
                        }}>{expanded && elementExpanded === props.id ? "Less detail" : "More detail"}</span>)}
                    <div className='tech-card-container'>
                        {props.tech_stack.map((tech) => (
                            <div className="tech-stack" key={tech}>{tech}</div>
                        ))}
                    </div>
                    <div className="btn-group">
                        {props.github_url.length > 0 && (
                            <a href={props.github_url} className="btn btn-secondary btn-shadow">
                                Github
                            </a>
                        )}
                        {props.demo_url.length > 0 && (
                            <a
                                className="btn btn-primary btn-shadow"
                                href={props.demo_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Go to website ➜
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    );
};

export default ProjectCard;