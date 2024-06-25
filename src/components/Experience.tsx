import React from 'react';
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';
type Props = {};
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
const Experience = (props: Props) => {
    return (
        <section className='relative md:container px-[1rem] max-w-[1024px] mx-auto  m-[4rem_auto] p-[4rem_0]' id='experience'>
            <h1 className="text-5xl">Experience</h1>
            <div className="flex justify-center mdl:pl-[7rem]">
                <motion.ul
                    className="timeline container flex flex-col items-center justify-end m-[8rem_0_2rem_0] gap-[5rem] max-w-[768px]">
                    {experience.map((item) => (
                        <ListExperience key={item.company} {...item} />
                    ))}
                </motion.ul>
            </div>
        </section>
    );
};

export default Experience;

const ListExperience = (item: IExperience) => {
    const isPresent = useIsPresent()
    React.useEffect(() => {
        console.log(isPresent);
    }, [isPresent])
    return (
        <motion.li variants={{
            hidden: { opacity: 0, },
            visible: {
                opacity: 1,
                transition: {
                    delayChildren: 0.2,
                    staggerChildren: .3
                }
            }
        }}
            whileInView="visible"
            initial="hidden"
            className="timeline-item">
            <div className="date">{item.date}</div>
            <motion.div variants={{
                hidden: { opacity: 0, y: -30 },
                visible: {
                    y: 0,
                    opacity: 1,
                }

            }} className='ml-10'>
                <motion.h3 className="font-bold text-2xl">{item.position}</motion.h3>
                <motion.p className="text-gray-400">{item.company}</motion.p>
                <motion.p className="text-gray-400 xl:hidden block">{item.date} - {item.end}</motion.p>
                <motion.p className='text-xl'>{item.description}</motion.p>
            </motion.div>
        </motion.li>
    );
};