import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { MdClose } from "react-icons/md";
import { Link } from 'react-scroll';

const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    const sideBarBg = {
        initial: {
            y: '-100%',
            opacity: 0
        },
        animate: { y: 0, opacity: 1 },
        exit: { y: 0, opacity: 0, transition: { delay: 0.1 } },
        transition: { duration: 0.3 },
    };
    const panel = {
        initial: { y: '-100%' },
        animate: { y: 0 },
        exit: { y: '-100%' },
        transition: { duration: 0.2 },
    };
    const text = (delay: number) => {
        return {
            initial: { opacity: 0, y: -50 },
            animate: { opacity: 1, y: 0 },
            transition: {
                delay: .2 + delay / 10,
            },
        };
    };

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        if (window.innerWidth > 667) {
            setOpen(false);
        }

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [open, window.innerWidth]);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setOpen(false);
        }
    }

    let menus = [
        {
            id: "hero",
            label: "Home"
        },
        {
            id: "about",
            label: "About"
        },
        {
            id: "skill",
            label: "My Skills"
        },
        {
            id: "experience",
            label: "Experience"
        },
        {
            id: "contact",
            label: "Contact"
        },
    ];

    const handleNavClick = (id: string) => {
        const element: HTMLElement | null = document.getElementById(id.replace("#", ""));
        const headerOffset = 110;
        const elementPosition = element!.getBoundingClientRect()!.top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        setOpen(false);
    };
    return (
        <header className="sticky  top-0 z-50 w-full border-b border-border/40 border-gray-800 border-border/40 bg-background/95 backdrop-blur">
            <div className="px-2 mx-2 md:container h-14 flex max-w-screen-2xl items-center">
                <div className="mr-4 md:flex">
                    <a href='#hero' className='text-3xl font-bold tracking-[0.3em] text-white mr-6 flex items-center w-10 h-10 space-x-2 cursor-pointer' >
                        DEV
                    </a>
                </div>
                <FaBars onClick={() => setOpen(!open)} className='block md:hidden ml-auto' size={22} />
                <ul className="ml-auto hidden md:flex md:w-auto text-lg">
                    {
                        menus.map((menu, index) => (
                            <li key={menu.id} >
                                <Link to={menu.id} smooth duration={500}  offset={ -57} className='mr-6 flex items-center  space-x-2 cursor-pointer' >{menu.label}</Link>
                            </li>
                        ))
                    }
                </ul>

            </div>
            <AnimatePresence>
                {open ? (
                    <motion.div
                        {...text(0)}
                        {...sideBarBg}
                        className={`h-screen w-screen overflow-hidden fixed right-0 bg-gray-900 top-0  border-r border-r-gray-900`}>
                        <motion.div
                            className="h-14 mx-2 flex max-w-screen-2xl items-center">
                            <div className="ml-auto"><MdClose size={32} onClick={() => setOpen(false)} /></div>
                        </motion.div>
                        <motion.ul {...panel} className="flex flex-col items-center uppercase p-4 h-full text-center text-xl leading-[4rem] ">

                            {
                                menus.map((menu, index) => (
                                    <motion.li {...text(index)} onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(menu.id);
                                    }} key={menu.id} className="p-4">
                                        <a href={menu.id}>{menu.label}</a>
                                    </motion.li>
                                ))}
                        </motion.ul>
                    </motion.div>
                ) : null}

            </AnimatePresence>
        </header>
    );
};

export default NavBar;