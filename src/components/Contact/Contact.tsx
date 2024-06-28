import React from 'react'
import { MdOutlineMail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { FaLine } from "react-icons/fa6";
import { IconType } from 'react-icons';
import './contact.css'

const Contact = () => {
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
    <section id="contact" className='warpper-content'>
      <div className="container flex flex-col  py-10 h-full mt-auto">
        <h2 className="sectionTitle mb-[0_!important] px-2">Contact Me</h2>

        <div className=" relative grid grid-cols-4 place-content-center text-center gap-10 mt-10 p-5 mx-auto">
          {contactSocial.map(element => (
            element.href ? (
              <a href={element.href ? element.href : "#"} key={element.href} className='contact-social border-primary'>
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

        <div className="mt-6  text-center w-full  px-4">
          <code>“Thanks for Scrolling”</code>
        </div>
      </div>
    </section>
  )
}

export default Contact