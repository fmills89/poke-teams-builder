import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import profOak from '../assets/professor-oak-image.png'

function SignUp() {
    return (
        <div>
            <>
            <Header />
            <Nav />
            </>
                <div class='min-h-screen text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12'>
                <div>
                    <img className='scale-50' src={profOak} alt='profressor oak' />
                </div>
                    <div class='relative py-3 sm:max-w-xl mx-auto text-center'>
                        <span class='text-2xl font-light'>Ready to build some teams?!</span>
                    </div>
                    <div className='relative mt-8 bg-white shadow-md sm:rounded-lg text-left'>
                        <div className='h-2 bg-red-400 rounded-t-md'></div>
                        <div className='py-6 px-8'>
                            <label className='block font-semibold'>Username</label>
                            <input type='text' placeholder='Username' className='border-red-300 w-full h-5 px-3 py-5 mt-2 rounded-md'></input>
                            <label className='block mt-3 font-semibold'>Password</label>
                            <input type='password' placeholder='Password' className='border-red-300 w-full h-5 px-3 py-5 my-2 rounded-md'></input>
                            <div className='flex justify-between items-baseline'>
                                <button className='mt-4 bg-red-500 text-white py-2 px-6 rounded-lg'>Sign-up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SignUp;