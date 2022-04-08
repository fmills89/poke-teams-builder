import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import profOak from '../assets/professor-oak-image.png'

function SignUp() {
    // const [signupState, setSignpState] = useState({

    // })
    return (
        <div>
            <div class='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mb-8 px-10 pb-64 w-full md:h-screen max-h-full'>
                        <img class='md:scale-100 scale-25' src={profOak} alt='profressor oak' />
                    <div className=' mt-8 bg-white shadow-md sm:rounded-lg text-left'>
                        <p class='text-center p-6'>Lets start building your teams!</p>
                        <div className='h-2 bg-red-400 rounded-t-md'></div>
                            <div className='py-8 px-8'>
                                <label className='block font-semibold'>Username</label>
                                <input type='text' placeholder='Username' className='border-red-300 w-full h-5 px-3 py-5 mt-2 rounded-md'></input>
                                <label className='block mt-3 font-semibold'>Password</label>
                                <input type='password' placeholder='Password' className='border-red-300 w-full h-5 px-3 py-5 my-2 rounded-md'></input>
                                <div className='flex justify-around items-baseline'>
                                    <button>Login</button>
                                    <button>Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SignUp;