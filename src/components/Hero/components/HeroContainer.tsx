import React from 'react'

interface IHeroContainerProps {
    id: string;
    children?: React.ReactNode;
}

const HeroContainer: React.FC<IHeroContainerProps> = ({
    id,
    children
}) => {
    return (
        <section >
            {children}
        </section>
    )
}

export default HeroContainer