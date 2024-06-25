import React from 'react'
import { MdOutlineMail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { FaLine } from "react-icons/fa6";
import { IconType } from 'react-icons';


const Contact = () => {
  const handleTrigger = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const popoverContent = document.getElementById('popoverContent');
    popoverContent!.classList.toggle('hidden');
    if (!popoverContent!.classList.contains("hidden")) {
      const spanRec = e.currentTarget.getBoundingClientRect();
      popoverContent!.style.top = `${popoverContent!.style.top + window.scrollY}px`;
      popoverContent!.style.left = `${popoverContent!.style.left}px`;
    }
  };
  const contactSocial: { icon: IconType, text: string, href: string | undefined }[] = [
    {
      icon: MdOutlineMail,
      text: "pirunporn02@gmail.com",
      href: "mailto:pirunporn02@gmail.com"
    },
    {
      icon: FiPhone,
      text: "095-879-0289",
      href: "tel:095-879-0289"
    },
    {
      icon: IoLocationOutline,
      text: "Bankok, Phasi charoen",
      href: ""
    },
    {
      icon: FaLine,
      text: "boyweihey",
      href: "https://line.me/R/ti/p/~boyweihey"
    },
  ];

  return (
    <section id="contact" className='relative m-[4rem_0_0_0] p-[4rem_0_0_0] h-screen'>
      <div className="flex flex-col items-center justify-center py-10 h-full mt-auto">
        <div className="flex items-center w-full  px-4">
          <div className="flex-grow custom-line"></div>
          <h2 className="px-4 text-2xl md:text-5xl font-bold">Contact Me</h2>
          <div className="flex-grow custom-line"></div>
        </div>
        <div className=" relative grid grid-cols-4 place-content-center text-center gap-10 mt-10 p-5 mx-auto">
          {contactSocial.map(element => (
            element.href ? (
              <a href={element.href ? element.href : ""} key={element.href} className='contact-social'>
                <code>
                  <element.icon size={22} />
                </code>
                <strong>{element.text}</strong>
              </a>) : (
              <a key={element.href} className='contact-social'>
                <code>
                  <element.icon size={22} />
                </code>
                <strong>{element.text}</strong>
              </a>
            )
          ))}
        </div>
        <div className="flex items-center w-full  px-4">
          <div className="flex-grow custom-line"></div>
          <h2 className="px-4 text-2xl md:text-5xl font-bold">Contact Me</h2>
          <div className="flex-grow custom-line"></div>
        </div>
        <div className="mt-6  text-center w-full  px-4">
          <code>“Thanks for Scrolling”</code>
        </div>
      </div>
    </section>
  )
}

export default Contact