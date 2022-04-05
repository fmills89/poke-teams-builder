import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div>
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