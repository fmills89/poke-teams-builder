import React from 'react';
import About from '../About';

import snorlax from '../../assets/snorlax-icon.png'
import profOakNavi from '../../assets/professoroak-navi.png'

function Teams() {
    return (
        <div>
            <>
            <About />
            </>
            <div class='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mb-8 px-10 pb-64 w-full md:h-screen max-h-full'>
                <div class=''>
                    <div class='mt-8 bg-white shadow-md sm:rounded-lg rounded-lg text-left'>
                        <div class='flex'>
                            <img class='mx-2 px-2 pt-2 md:scale-100 scale-75'src={profOakNavi} alt='professor-oak-navi' />
                            <p class='text-center p-4 mt-10'>Begin by searching for a pokemon to add to your team!</p>
                        </div>
                            <div className='h-2 bg-red-400 rounded-t-md'></div>
                                <div className='py-8 px-8 rounded-md'>
                                    <label className='block mt-3 font-semibold'>Enter Name:</label>
                                    <input type='text' placeholder='Name' className='border-red-300 w-full h-5 px-3 py-5 my-2 rounded-md'></input>
                                    <div className='flex justify-around items-baseline'>
                                        <button>Search</button>
                                    </div>
                                </div>
                            </div>
                </div>
                <div class="card p-20">
                    <div class='card'>
                            <img src={snorlax} alt='snorlax' />
                        <span>
                            <div>
                                Name: Snorlax
                            </div>
                            <div>
                                Type: Normal
                            </div>
                        </span>
                    </div>
                    <button>Add to team!</button>
                </div>
            </div>
        </div>
    );
};

export default Teams;