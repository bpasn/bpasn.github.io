import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { MdClose } from "react-icons/md";
import { Link } from 'react-scroll';
import { EachElement } from '../../lib/utils';
import menus from '../../json/nav.json';
interface IMenus {
    id: string;
    label: string;
}
const NavBar = () => {
    const linkResume = "https://drive.google.com/file/d/1yJi-yRV2JdiQV_AqP-Ezu_vwn4q1eFdq/view?usp=drive_link";
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
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [open]);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setOpen(false);
        }
    }

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
    // const handleDownload = () => {
    //     // let link: HTMLAnchorElement = document.createElement<"a">('a');

    //     // let file = '/pdf/Resume.pdf';
    //     // link.href = file; // URL ของไฟล์ที่ต้องการดาวน์โหลด
    //     // link.download = 'Resume.pdf'; // ชื่อไฟล์ที่จะถูกดาวน์โหลด
    //     // // คลิกที่ลิงก์เพื่อดาวน์โหลดไฟล์
    //     // document.body.appendChild(link);
    //     // link.click();
    //     // document.body.removeChild(link);
    //     const linkResume = "https://drive.google.com/file/d/1PXhnRNxkxvRQ2QvNV7gWhn_aH0M6ymPd/view?usp=sharing";
    //     window.location.href = linkResume;
    // }
    return (
        <header className="sticky mdl:p-5 top-0 z-50 w-full  border-gray-800 border-border/40 bg-[#151418] backdrop-blur">
            <div className="px-2 mx-2 md:container h-14 flex max-w-screen-2xl items-center">
                <div className="mr-4 md:flex">
                    <Link to='hero' smooth duration={100} offset={-500} className='text-3xl font-bold tracking-[0.3em] text-white mr-6 flex items-center w-10 h-10 space-x-2 cursor-pointer' >
                        DEV
                    </Link>
                </div>
                <FaBars onClick={() => setOpen(!open)} className='cursor-pointer block mdl:hidden ml-auto' size={22} />
                <ul className={` ml-auto hidden mdl:flex mdl:w-auto text-lg `}>
                    <EachElement
                        of={menus}
                        render={(menu: IMenus) => (
                            <li key={menu.id} >
                                <Link to={menu.id} smooth duration={100} offset={-100} className={`mr-6 flex items-center  space-x-2 cursor-pointer `}>{menu.label}</Link>
                            </li>
                        )}
                    />
                </ul>
                <div className='ml-auto   hidden mdl:block'>
                    <a href={linkResume} target='_blank' rel='noreferrer noopener'
                        className="btn btn-primary"
                    >
                        Resume
                    </a>
                </div>
            </div>
            <AnimatePresence>
                {open ? (
                    <motion.div
                        {...text(0)}
                        {...sideBarBg}
                        className={`h-screen w-screen overflow-hidden fixed right-0 bg-[#151418] top-0  border-r border-r-gray-900`}>

                        <motion.div
                            className="cursor-pointer h-14 mx-2 flex max-w-screen-2xl items-center">
                            <div className="ml-auto"><MdClose size={32} onClick={() => setOpen(false)} /></div>
                        </motion.div>
                        <motion.ul {...panel} className="flex flex-col items-center uppercase p-4 h-full text-center text-xl leading-[4rem] ">
                            <EachElement
                                of={menus}
                                render={(menu, index) => (
                                    <motion.li {...text(index)} onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(menu.id);
                                    }} key={menu.id} className="p-4">
                                        <Link to={menu.id} smooth duration={100} offset={-70} onClick={() => setOpen(false)}>{menu.label}</Link>
                                    </motion.li>
                                )}
                            />
                            <li className='mt-[5rem] uppercase block md:hidden'>
                                <a href={linkResume}
                                    className="btn btn-primary"
                                    rel="noopener noreferrer"
                                >
                                    Resume
                                </a>
                            </li>
                        </motion.ul>
                    </motion.div>
                ) : null}

            </AnimatePresence>
        </header>
    );
};

export default NavBar;