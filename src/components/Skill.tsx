import ListCard from '../ui/components/list-card';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import React, { RefObject, useEffect, useRef } from 'react';
import skills from '../assets/json/skill.json';
const Skill = () => {
    const ref = useRef(null);
    return (
        <section
            id="skill"
            ref={ref}
            className='m-[4rem_auto] p-[4rem_0]'
        >
            <h1 className="text-white text-4xl font-bold  mb-[5rem] text-center">My Skills</h1>
            <FadeInWhenVisible container={ref} >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-[960px] place-content-center mx-auto">
                    {preramid().map((element, index) => {
                        return (
                            <div className="col-span-4" key={index}>
                                {element}
                            </div>
                        );
                    })}
                </div>
            </FadeInWhenVisible>

        </section >
    );
};
const _container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: .1
        }
    }
};
const createElement = (col: number, items: { skill: string, image: string; }[]): React.JSX.Element[] => {
    let elemenes: React.JSX.Element[] = [];
    for (let i: number = 0; i < col; i++) {
        elemenes.push(
            <motion.div whileHover={{ scale: 1.2, zIndex: 10 }} key={items[i].skill} className='w-full md:w-1/5'>
                <ListCard skill={items[i].skill} image={items[i].image} />
            </motion.div>
        );
    }
    return elemenes;

};
const preramid = () => {
    let elements: React.JSX.Element[] = [];
    let size: number = skills.length;
    let cols: number = 4;
    let rows: number = Math.ceil(size / cols) < 4 ? 4 : Math.ceil(size / cols);
    let start: number = 0;
    for (let inx: number = 0; inx < rows; inx++) {
        if (inx < rows - 2) {
            elements.push(
                <motion.div className="grid grid-cols-2 md:flex md:justify-center md:flex-wrap gap-5">
                    {createElement(4, skills.slice(start, cols))}
                </motion.div>
            );
            start += 4;
            cols += 4;
        } else if (inx === rows - 2) {
            elements.push(
                <div className="grid grid-cols-2  md:flex md:justify-center flex-wrap gap-5">
                    {createElement(3, skills.slice(start, cols - 1))}
                </div>
            );
            start += 3;
            cols += 3;
        } else if (inx === rows - 1) {
            if (skills.slice(start, cols - 2).length <= 0) break;
            elements.push(
                <div className="grid grid-cols-2 md:flex md:justify-center flex-wrap gap-5">
                    {createElement(2, skills.slice(start, cols - 2))}
                </div>
            );
        }
    }
    return elements;
};
export default Skill;



const FadeInWhenVisible = ({
    children,
    container
}: {
    container: RefObject<HTMLElement>
    children: React.ReactNode
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { root: container });
    const control = useAnimationControls();
    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [inView, control]);
    return (
        <motion.div
            ref={ref}
            whileInView={"visible"}
            initial="hidden"
            variants={_container}
        >
            {children}
        </motion.div>
    )
}