import React from 'react'
import { FaMailBulk, FaGithub } from 'react-icons/fa'
import './social.css'
const SocialIcon = () => {
    return (
        <div className="social-icon">
            <ul >
                <li className="item">
                    <a href="#" className='hover:text-[rgb(57,250,105)]'>
                        <FaMailBulk />
                    </a>
                </li>
                <li className="item">
                    <a href="#" className='hover:text-[rgb(57,250,105)]'>
                        <FaGithub />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialIcon