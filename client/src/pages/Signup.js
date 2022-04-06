import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';

function SignUp() {
    return (
        <div>
            <>
            <Header />
            <Nav />
            </>

            <div>
                <Link to='/Login'>Go to Login</Link>
            </div>
            <div>
                <h2>Sign-Up</h2>
            </div>
        </div>
    );
};

export default SignUp;