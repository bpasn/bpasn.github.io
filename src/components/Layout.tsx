import React, { useCallback, useEffect } from 'react';
import NavBar from './nav/NavBar';
import { fetching, useGlobalContext } from 'context/firebase-context';
interface Props {
    children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
    const { values, setValue } = useGlobalContext();
    const fetchData = useCallback(async () => {
        const data = await fetching();
        setValue(data);
    }, [values]);
    useEffect(() => {
        return () => {
            fetchData();
        }
    }, []);
    return (
        <>
            {/* <img
                src={Background}
                alt="background"
                className='absolute inset-0 z-0 h-full w-screen  object-cover bg-repeat' />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-80 " /> */}
            <NavBar />
            {children}
            <footer className='bg-wave-contact bg-no-repeat bg-cover w-full h-[250px] relative'>
                <div className="container"></div>
            </footer>
        </>
    );
};

export default Layout;