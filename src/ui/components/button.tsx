import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
interface ButtonProps {
    text: string
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    className
}) => {
    return (
        <Link to='about' smooth={true} offset={-60} duration={500}>
            <button
                className={`border rounded-lg p-2 md:p-4 hover:bg-primary ease-in-out duration-500 ${className}`}
                onClick={onClick}
            >
                {text}
            </button>
        </Link>
    )
}

export default Button