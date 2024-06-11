import React from 'react';
import { Link } from 'react-scroll';
import Logo from "../../assets/image/logo.png";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            const element = document.querySelector('.transition-opacity');
            if (element) {
                element.classList.remove('opacity-0');
                element.classList.add('opacity-100');
            }
        }, 100); // ตั้งเวลาหน่วงเป็น 100 milliseconds ก่อนที่คลาส transition จะถูกเพิ่มเข้าไป

        return () => clearTimeout(timeout);
    }, [open]);
    return (
        <header className="sticky top-0 z-50 w-full bg-black border-b border-border/40 border-gray-800">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <button onClick={() => setOpen(!open)} className='mr-6 md:hidden  flex items-center w-10 h-10 space-x-2 cursor-pointer' >
                    <img className='w-full h-full' src={Logo} alt="logo" />
                </button>
                <div onClick={() => setOpen(!open)} className={`fixed top-0 left-0 right-0 bg-red-500 opacity-0 transform transition-transform duration-500 ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}>
                    <button>
                        <h1 className="text-xl p-5 translate-y-2">X</h1>
                    </button>
                </div>
                <div className="mr-4 hidden md:flex">
                    <Link spy smooth offset={-50} duration={500} to='hero' className='text-lg font-bold tracking-[0.3em] text-white mr-6 flex items-center w-10 h-10 space-x-2 cursor-pointer' >
                        DEV
                    </Link>
                </div>
                <ul className="ml-auto hidden md:flex md:w-auto">
                    <li>
                        <Link spy smooth offset={-60} duration={500} to='hero' className='mr-6 flex items-center w-10 h-10 space-x-2 cursor-pointer' >Home</Link>
                    </li>
                    <li>
                        <Link spy smooth offset={-60} duration={500} to='about' className='mr-6 flex items-center w-10 h-10 space-x-2 cursor-pointer' >About</Link>
                    </li>
                    <li>
                        <Link spy smooth offset={-60} duration={500} to='contact' className='mr-6 flex items-center w-10 h-10 space-x-2 cursor-pointer' >Contact</Link>
                    </li>

                </ul>

            </div>
        </header>
    )
}

export default NavBar