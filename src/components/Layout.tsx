import React from 'react';
import NavBar from './nav/NavBar';
import Background from '../assets/image/backgorund3.jpg';
interface Props {
    children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div
            className='relative flex min-h-screen flex-col'>
            <img
                src={Background}
                alt="background"
                className='absolute inset-0 z-0 h-full w-screen  object-cover bg-repeat' />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-80 " />

            <NavBar />
            <main className="relative">{children}</main>

        </div>
    );
};

export default Layout;