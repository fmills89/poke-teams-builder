import React, { useState } from 'react';
import Modal from '../components/Modal';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


import profOak from '../assets/professor-oak-image.png'

function Login(props) {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { username: formState.username, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    return (
        <div>
            <div class='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mb-8 px-10 pb-64 w-full md:h-screen max-h-full'>
                        <img class='md:scale-100 scale-25' src={profOak} alt='profressor oak' />
                    <div className=' mt-8 bg-white shadow-md rounded-lg text-left'>
                        <p class='text-center p-6'>Lets start building your teams!</p>
                        <div className='h-2 bg-red-400 rounded-t-md'></div>
                            <form className='py-8 px-8' onSubmit={handleFormSubmit}>
                                <label className='block font-semibold'>Username</label>
                                <input 
                                    type='text'
                                    name='username'
                                    placeholder='Username' 
                                    className='border-red-300 w-full h-5 px-3 py-5 mt-2 rounded-md'
                                    value= {formState.username}
                                    onChange={handleChange} />
                                <label className='block mt-3 font-semibold'>Password</label>
                                <input 
                                    type='password'
                                    name='password'
                                    placeholder='Password' 
                                    className='border-red-300 w-full h-5 px-3 py-5 my-2 rounded-md form-input' 
                                    value={formState.password} 
                                    onChange={handleChange} />
                                <div className='flex justify-around items-baseline'>
                                    <button type='submit' class='mt-2 p-2 bg-red-500'>Login</button>
                            </div>
                            {error && <div>Login failed</div>}
                        </form>
                        <Modal />
                    </div>
                </div>
        </div>  
    );
};

export default Login;