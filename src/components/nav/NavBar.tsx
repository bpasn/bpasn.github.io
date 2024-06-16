import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { MdClose } from "react-icons/md";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    const sideBarBg = {
        initial: {
            y: '-100%',
            opacity: 0
        },
        animate: { y: 0, opacity: 1 },
        exit: { y: 0, opacity: 0, transition: { delay: 0.2 } },
        transition: { duration: 0.3 },
    };
    const panel = {
        initial: { y: '-100%' },
        animate: { y: 0 },
        exit: { y: '-100%' },
        transition: { duration: 0.3 },
    };
    const text = (delay: number) => {
        return {
            initial: { opacity: 0, y: -50 },
            animate: { opacity: 1, y: 0 },
            transition: {
                delay: 0.5 + delay / 10,
            },
        };
    };

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    let menus = [
        {
            id: "#hero",
            label: "Home"
        },
        {
            id: "#about",
            label: "About"
        },
        {
            id: "#skills",
            label: "My Skills"
        },
        {
            id: "#contact",
            label: "Contact"
        },
    ];
    return (
        <header className="sticky  top-0 z-50 w-full border-b border-border/40 border-gray-800 border-border/40 bg-background/95 backdrop-blur">
            <div className="container h-14 flex max-w-screen-2xl items-center">
                <div className="mr-4 md:flex">
                    <a href='#hero' className='text-3xl font-bold tracking-[0.3em] text-white mr-6 flex items-center w-10 h-10 space-x-2 cursor-pointer' >
                        DEV
                    </a>
                </div>
                <FaBars onClick={() => setOpen(!open)} className='ml-auto' size={16} />
                <ul className="ml-auto hidden md:flex md:w-auto text-lg">
                    {
                        menus.map((menu) => (
                            <li key={menu.id}>
                                <a href={menu.id} className='mr-6 flex items-center  space-x-2 cursor-pointer' >{menu.label}</a>
                            </li>
                        ))
                    }
                </ul>

            </div>
            <AnimatePresence>
                {open ? (
                    <motion.div
                        {...sideBarBg}
                        className={`h-screen w-screen overflow-hidden fixed right-0 bg-gray-900 top-0  border-r border-r-gray-900`}>
                        <motion.ul {...panel} className="flex flex-col items-center justify-center uppercase p-4 h-full text-center text-xl leading-[4rem] ">
                            {
                                menus.map((menu, index) => (
                                    <motion.li {...text(index)} onClick={() => setOpen(!open)} key={menu.id} className="p-4">
                                        <a href={menu.id}>{menu.label}</a>
                                    </motion.li>
                                ))}
                            <motion.li {...text(menus.length + 1)} className="p-4 mt-auto">
                                <MdClose size={32} onClick={() => setOpen(false)} />
                            </motion.li>

                        </motion.ul>
                    </motion.div>
                ) : null}

            </AnimatePresence>
        </header>
    );
};

export default NavBar;