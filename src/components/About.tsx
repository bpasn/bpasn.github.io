import React from 'react';
import Background from '../assets/image/background2-removebg-preview.png';
const About = () => {
  return (
    <section
      id="about"
      className='m-auto p-[8rem_1rem_0_1rem] w-full'
    >
     <div className='m-auto grid grid-cols-1'>
     <h1 className="text-white text-4xl font-bold  mb-8">About</h1>
      <ul className='relative ul-style flex gap-2'>
        <li className=' w-52 mt-3 border-t-2 border-t-primary'></li>
        <li className="list-item text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, nemo delectus cum excepturi eligendi debitis dignissimos modi perspiciatis consectetur cupiditate harum molestiae cumque voluptatum libero autem amet! Explicabo natus, beatae omnis distinctio vel libero suscipit magni! Adipisci, magni voluptate dolores totam eum, deserunt atque sit cumque necessitatibus quasi sint voluptatum.</li>
      </ul>
     </div>
    </section>
  );
};


export default About;