import React from 'react';
import NavBar from './nav/NavBar';

interface Props {
    children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className='relative flex min-h-screen flex-col'>
            <NavBar />
            <main className="flex-1">
                <div className="container">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout