import React from 'react';
import { Link } from 'react-router-dom';

import profOak from '../../assets/professor-oak-image.png'

function About() {
    return(
       <div className='w-full h-screen flex flex-col justify-between px-10 pb-64'>
           <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
               <div>
                   <img className='' src={profOak} alt='professor oak' />
               </div>
               <div className='flex flex-col justify-center items-center sm:items-center w-full px-2 py-8'>
                   <p className='text-2xl text-center py-13 pb-6'>Welcome to Poke-Teams! Create an account to start building teams!</p>
                   <Link to='/login'>
                        <button className='py-3 px-6 sm:w-full'>
                            Get Started
                        </button>
                   </Link>
               </div>
           </div>
       </div>
    )
};

export default About;