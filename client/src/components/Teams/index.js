import React from 'react';
import snorlax from '../assets/snorlax-icon.png'
import profOakNavi from '../assets/professoroak-navi.png'

function Teams() {
    return (
        <div>
               <div class='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mb-8 px-10 pb-64 w-full md:h-screen max-h-full'>
                   <div class=''>
                        <div class='mt-8 bg-white shadow-md sm:rounded-lg rounded-lg text-left'>
                            <p class='text-center p-4'>Begin by searching for a pokemon to add to your team!</p>
                                <img src={profOakNavi} alt='professor-oak-navi' />
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
                    <div class="card">
                        <div>
                            <p>
                                Snorlax
                                <img src={snorlax} alt='snorlax' />
                            </p>
                        </div>
                    </div>
                    {/* <div class='...'>04</div> */}
               </div>
        </div>
    );
};

export default Teams;