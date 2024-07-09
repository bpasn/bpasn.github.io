import React from 'react';
import './experience.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { EachElement } from 'lib/utils';
import { IExperience } from 'typing';
import { useGlobalContext } from 'context/firebase-context';
const Experience = () => {
    const { values: { experiences } } = useGlobalContext();
    return (
        <section className='warpper-content' id='experience'>
            <div className="container">
                <div className="sectionTitle">Experience</div>
                <div className="big-card  px-[1rem_!important] flex justify-center mdl:px-[9rem_!important]">
                    <ul
                        className="timeline container flex flex-col items-center justify-end my-3 mdl:m-[4rem_0] gap-[5rem] max-w-[768px]">
                        <EachElement
                            of={experiences}
                            render={(item, index) => (
                                <ScrollAnimation animateIn='fadeInLeft' >
                                    <ListExperience {...item} id={index.toString()} />
                                </ScrollAnimation>
                            )}
                        />
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;

const ListExperience = (item: IExperience) => {
    return (
        <li className="timeline-item">
            <div className="date">{item.date}</div>
            <div className='ml-[1.3rem] md:ml-10 '>
                <h3 className="font-bold text-2xl">{item.position}</h3>
                <p className="text-gray-400">{item.company}</p>
                <p className="text-gray-400 xl:hidden block">{item.date} - {item.end}</p>
                <ul className='list-disc marker:text-primary ml-5'>
                    {item.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </div>
        </li>
    );
};