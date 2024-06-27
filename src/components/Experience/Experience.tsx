import React from 'react';
import './experience.css';
import ScrollAnimation from 'react-animate-on-scroll';
interface IExperience {
    date: string;
    position: string;
    company: string;
    description: string;
    end: string;
}
const experience: IExperience[] = [
    {
        date: "2022",
        position: "Junior Full-Stack Developer",
        company: "2J Solution and Services Co., Ltd.",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eos nemo accusamus libero vel aut repudiandae nam? Nobis ut vitae exercitationem, nesciunt, saepe, quia nam necessitatibus quos eius ex consequuntur quae? Itaque deserunt amet rem ad sed enim harum, sunt aut. Laboriosam ratione esse doloribus quibusdam est, nulla laborum tempora.",
        end: "Present"
    },
    {
        date: "2020",
        position: "Junior Front-End Developer",
        company: "Nippon Sysits Co., Ltd.",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eos nemo accusamus libero vel aut repudiandae nam? Nobis ut vitae exercitationem, nesciunt, saepe, quia nam necessitatibus quos eius ex consequuntur quae? Itaque deserunt amet rem ad sed enim harum, sunt aut. Laboriosam ratione esse doloribus quibusdam est, nulla laborum tempora.",
        end: "2022"
    },

];
const Experience = () => {
    return (
        <section className='warpper-content' id='experience'>
            <div className="container">
                <div className="sectionTitle">Experience</div>
                <div className="big-card flex justify-center mdl:px-[9rem]">
                    <ul
                        className="timeline container flex flex-col items-center justify-end m-[4rem_0_2rem_0] gap-[5rem] max-w-[768px]">
                        {experience.map((item) => (
                            <ScrollAnimation animateIn='fadeInLeft' key={item.company} >
                                <ListExperience {...item} />
                            </ScrollAnimation>
                        ))}
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
            <div className='ml-[3.5rem] md:ml-10 '>
                <h3 className="font-bold text-2xl">{item.position}</h3>
                <p className="text-gray-400">{item.company}</p>
                <p className="text-gray-400 xl:hidden block">{item.date} - {item.end}</p>
                <p className='text-xl'>{item.description}</p>
            </div>
        </li>
    );
};