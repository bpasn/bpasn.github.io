import React from 'react'
import { MdOutlineMail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { FaLine } from "react-icons/fa6";
import './contact.css'
import { EachElement } from 'lib/utils';
import { IconType } from 'react-icons';
interface IContact {
  icon: IconType, text: string, href: string | undefined;
}


const Contact = () => {
  const contacts: IContact[] = [
    {
      "icon": MdOutlineMail,
      "text": "pirunporn.aia@gmail.com",
      "href": "mailto:pirunporn.aia@gmail.com"
    },
    {
      "icon": FiPhone,
      "text": "095-879-0289",
      "href": "tel:095-879-0289"
    },
    // {
    //   "icon": IoLocationOutline,
    //   "text": "Bankok, Phasi charoen",
    //   "href": ""
    // },
    {
      "icon": FaLine,
      "text": "boyweihey",
      "href": "https://line.me/R/ti/p/~boyweihey"
    }
  ]
  return (
    <section id="contact" className='warpper-content'>
      <div className="container flex flex-col  py-10  mt-auto">
        <h2 className="sectionTitle mb-[0_!important] px-2">Contact Me</h2>
        <div className="relative flex flex-row flex-wrap justify-center items-center text-center gap-10 mt-10 p-5 mx-auto">
          <EachElement
            of={contacts}
            render={(element) => {
              return (
                element.href ? (
                  <a href={element.href} className='contact-social border-primary'>
                    <code>
                      <element.icon size={22} />
                    </code>
                    <strong>{element.text}</strong>
                  </a>) : (
                  <p className='contact-social'>
                    <code>
                      <element.icon size={22} />
                    </code>
                    <strong>{element.text}</strong>
                  </p>
                )
              )
            }}
          />
        </div>

        <div className="mt-6  text-center w-full  px-4">
          <code>“Thanks for Scrolling”</code>
        </div>
      </div>
    </section>
  )
}

export default Contact