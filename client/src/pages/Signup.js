import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import profOak from '../assets/professor-oak-image.png'

function SignUp() {
    const [signupState, setSignupState] = useState({
        username: '',
        password: '',
    });
    const [addUser, { error }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setSignupState({
            ...signupState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...signupState },
            });
            
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div>
            <div class='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mb-8 px-10 pb-64 w-full md:h-screen max-h-full'>
                        <img class='md:scale-100 scale-25' src={profOak} alt='profressor oak' />
                    <div className=' mt-8 bg-white shadow-md sm:rounded-lg text-left'>
                        <p class='text-center p-6'>Lets start building your teams!</p>
                        <div className='h-2 bg-red-400 rounded-t-md'></div>
                            <form className='py-8 px-8' onSubmit={handleFormSubmit}>
                                <label className='block font-semibold'>Username</label>
                                <input 
                                    type='text'
                                    name='username'
                                    placeholder='Username' 
                                    className='border-red-300 w-full h-5 px-3 py-5 mt-2 rounded-md'
                                    value= {signupState.username}
                                    onChange={handleChange} />
                                <label className='block mt-3 font-semibold'>Password</label>
                                <input 
                                    type='password'
                                    name='password'
                                    placeholder='Password' 
                                    className='border-red-300 w-full h-5 px-3 py-5 my-2 rounded-md form-input' 
                                    value={signupState.password} 
                                    onChange={handleChange} />
                                <div className='flex justify-around items-baseline'>
                                    <button>Login</button>
                                    <button type=''>Sign up</button>
                            </div>
                            {error && <div>Signup failed</div>}
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default SignUp;