import React from 'react';

import profOak from '../../assets/professor-oak-image.png'

function About() {
    return(
       <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
           <div className='grid md:grid-cols-2 max-w-[1240px] m-auto pb-72'>
               <div>
                   <img className='' src={profOak} alt='professor oak' />
               </div>
               <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                   <p className='text-2xl pb-6'>Welcome to Poke-Team! Create an account to start building teams!</p>
                   <button className='py-3 px-6 sm:w-[60%]'>Get Started</button>
               </div>
           </div>
       </div>
    )
};

export default About;