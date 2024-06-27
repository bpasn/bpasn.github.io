import React from 'react';
import NavBar from './nav/NavBar';
import Background from '../assets/image/backgorund3.jpg';
interface Props {
    children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            {/* <img
                src={Background}
                alt="background"
                className='absolute inset-0 z-0 h-full w-screen  object-cover bg-repeat' />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-80 " /> */}
            <NavBar />
            {children}
        </>
    );
};

export default Layout;