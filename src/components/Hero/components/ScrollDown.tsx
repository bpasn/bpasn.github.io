import React from 'react';
import { Link, LinkProps } from 'react-scroll';

const ScrollDown: React.FC<LinkProps> = ({
    to,
    children,
    offset,
    className,
    ...props
}) => {
    return (
        <Link
            to={to}
            offset={offset}
            duration={100}
            smooth
            className={`animate-hero-scrolling flex mt-[2rem] justify-center cursor-pointer mdl:justify-start mdl:mt-[2rem] ${className || ''}`}
        >
            {children}
        </Link>
    );
};

export default ScrollDown;
