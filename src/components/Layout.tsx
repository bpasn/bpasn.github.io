import React from 'react';
import NavBar from './nav/NavBar';
import { animate, motion, Variant, Variants } from 'framer-motion';
interface Props {
    children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
    let variant: Variants = {
        initial: {
            y: 0,
        },
        animate: {
            y: ['-100%', '0%'],
            transition: {
                ease: "linear",
                repeat: Infinity,
                duration: 5,
            }
        }
    };
    return (
        <div
            className='relative flex min-h-screen flex-col'>
            {/* <img
                src={Background}
                alt="background"
                className='absolute inset-0 z-0 h-full w-screen  object-cover' />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-80 " /> */}

            <NavBar />
            <main className="flex-1">
                <div className="relative container">{children}</div>

            </main>
        </div>
    );
};

export default Layout;