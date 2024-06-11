import { OgDataModel, OpenGraphPreview } from '../../utils/openGraph';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
interface CardProp {
    title: string;
    description?: string;
    image?: string;
    url: string
}

const Card: React.FC<CardProp> = ({
    title,
    description,
    image,
    url
}) => {
    const variant = {
        initial: {
            opacity: 0,
            y: 100
        },
    }
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-[350px]" src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-gray-700 text-xl mb-2">{title}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
}

export default Card