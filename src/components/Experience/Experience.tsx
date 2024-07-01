import React from 'react';
import './experience.css';
import ScrollAnimation from 'react-animate-on-scroll';
interface IExperience {
    date: string;
    position: string;
    company: string;
    description: string[];
    end: string;
}
const experience: IExperience[] = [
    {
        date: "2022",
        position: "Junior Full-Stack Developer",
        company: "2J Solution and Services Co., Ltd.",
        description: [
            "Developed and modified programs to meet user needs and requirements, ensuring high functionality and usability.",
            "Created comprehensive plans to optimize and enhance working processes, improving efficiency and productivity.",
            "Developed reports exportable in Excel and other formats, facilitating data analysis and reporting.",
            "Set up environment websites using OS Linux, including configuring ports and Nginx, to ensure accessibility in browsers.",
            "Led the mobile application development for the POS UI System on the SayPay Project using Flutter (Android and iOS), ensuring a seamless user experience across platforms."
        ],
        end: "Present"
    },
    {
        date: "2020",
        position: "Junior Front-End Developer",
        company: "Nippon Sysits Co., Ltd.",
        description: [
            "Developed client-specific web applications using VB.net to ensure all requirements were met, providing tailored solutions for diverse clients.",
            "Designed and implemented exportable reports in Excel and various formats for enhanced data accessibility, streamlining client operations.",
            "Coordinated closely with business development and project management teams to ensure on-time task completion, fostering effective teamwork and project success."
        ],
        end: "2022"
    },

];
const Experience = () => {
    return (
        <section className='warpper-content' id='experience'>
            <div className="container">
                <div className="sectionTitle">Experience</div>
                <div className="big-card  px-[1rem_!important] flex justify-center mdl:px-[9rem_!important]">
                    <ul
                        className="timeline container flex flex-col items-center justify-end my-3 mdl:m-[4rem_0] gap-[5rem] max-w-[768px]">
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
            <div className='ml-[1.3rem] md:ml-10 '>
                <h3 className="font-bold text-2xl">{item.position}</h3>
                <p className="text-gray-400">{item.company}</p>
                <p className="text-gray-400 xl:hidden block">{item.date} - {item.end}</p>
                <ul className='text-xl list-disc marker:text-primary ml-5'>
                    {item.description.map((desc,index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </div>
        </li>
    );
};