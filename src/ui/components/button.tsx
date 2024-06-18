import React from 'react';
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
        <button
            className={`border rounded-lg p-2 md:p-4 hover:bg-primary ease-in-out duration-500 ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button