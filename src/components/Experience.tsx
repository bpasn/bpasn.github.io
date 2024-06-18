import React from 'react'

type Props = {}
interface IExperience {
    date: string;
    position: string;
    company: string;
    description: string;
    end: string;
}
const experience: IExperience[] = [
    {
        date: "2020",
        position: "Junior Front-End Developer",
        company: "Nippon Sysits Co., Ltd.",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eos nemo accusamus libero vel aut repudiandae nam? Nobis ut vitae exercitationem, nesciunt, saepe, quia nam necessitatibus quos eius ex consequuntur quae? Itaque deserunt amet rem ad sed enim harum, sunt aut. Laboriosam ratione esse doloribus quibusdam est, nulla laborum tempora.",
        end: "2022"
    },
    {
        date: "2022",
        position: "Junior Full-Stack Developer",
        company: "2J Solution and Services Co., Ltd.",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eos nemo accusamus libero vel aut repudiandae nam? Nobis ut vitae exercitationem, nesciunt, saepe, quia nam necessitatibus quos eius ex consequuntur quae? Itaque deserunt amet rem ad sed enim harum, sunt aut. Laboriosam ratione esse doloribus quibusdam est, nulla laborum tempora.",
        end: "Present"
    }
];
const Experience = (props: Props) => {
    return (
        <section className=' container'>
            <h1 className="text-5xl">Experience</h1>
            <div className="flex justify-center">
                <ul className="timeline container flex flex-col items-center justify-center m-[8rem_0_2rem_0] gap-[5rem] max-w-[980px]">
                    {experience.map((item) => (<ListExperience {...item} />))}
                </ul>
            </div>
        </section>
    )
}

export default Experience

const ListExperience = (item: IExperience) => {
    return (
        <li className="timeline-item">
            <div className="date mr-10">{item.date}</div>
            <div className='ml-10'>
                <h3 className="font-bold text-xl">{item.position}</h3>
                <p className="text-gray-400">{item.company}</p>
                <p className="text-gray-400 md:hidden block">{item.date} - {item.end}</p>
                <p>{item.description}</p>
            </div>
        </li>
    )
}