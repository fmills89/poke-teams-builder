import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import profOak from '../assets/professor-oak-image.png'

function SignUp() {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);
  
    // update state based on form input changes
    const handleChange = event => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value
      });
    };
  
    // submit form
    const handleFormSubmit = async event => {
      event.preventDefault();
  
      // use try/catch instead of promises to handle errors
      try {
        // execute addUser mutation and pass in variable data from form
        const { data } = await addUser({
          variables: { ...formState }
        });
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };

    return (
        <div>
            <p>This is the sign up page.</p>
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
        
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>
        </div>
    );
};

export default SignUp;