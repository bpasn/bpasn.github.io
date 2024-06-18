import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section id="contact" className='m-[4rem_auto] p-[4rem_0] text-primary'>
      <div className="flex flex-col items-center py-10">
        <div className="flex items-center w-full  px-4">
          <div className="flex-grow custom-line"></div>
          <h2 className="px-4 text-5xl font-bold">Contact Me</h2>
          <div className="flex-grow custom-line"></div>
        </div>
        <div className="grid grid-cols-4 place-content-center gap-5">
            <span className="material-icons col-span-2">facebook</span>
            <span className="material-icons col-span-2 ">twitter</span>
            <span className="material-icons col-start-2">linkedin</span>
          </div>
        <div className="mt-6 flex items-center w-full max-w-4xl px-4">
          <div className="flex-grow custom-line"></div>
          <div className="flex space-x-4 px-4">
            <span className="material-icons">facebook</span>
            <span className="material-icons">twitter</span>
            <span className="material-icons">linkedin</span>
            <span className="material-icons">whatsapp</span>
          </div>
          <div className="flex-grow custom-line"></div>
        </div>

        <div className="mt-6">
          <p className="italic text-xl">“Thanks for Scrolling”</p>
        </div>
      </div>
    </section>
  )
}

export default Contact