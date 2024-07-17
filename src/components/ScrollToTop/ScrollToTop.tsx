import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md';
import { animateScroll as scroll } from 'react-scroll';
import './style.css';
const ScrollToTop = () => {
  const [open, setOpen] = useState<boolean>();
  const [shouldRender, setShouldRender] = useState<boolean>();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 500;
      if (window.scrollY > scrollThreshold) setShouldRender(true);
      else setShouldRender(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    shouldRender && <div className="tooltip">
      <MdKeyboardArrowUp onClick={() => {
        setOpen(false);
        scroll.scrollToTop({ duration: 0 });
      }} />
    </div>
  )
}

export default ScrollToTop;