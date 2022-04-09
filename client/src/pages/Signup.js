import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import profOak from '../assets/professor-oak-image.png'

function SignUp() {
    return (
        <div>
            <>
            <Header />
            <Nav />
            </>
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
                                    <button className='mt-4 bg-red-500 text-white text-xs md:text-base py-2 px-6 rounded-lg'>Login</button>
                                    <button className='mt-4 bg-red-500 text-white text-xs md:text-base py-2 px-4 rounded-lg'>Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default SignUp;