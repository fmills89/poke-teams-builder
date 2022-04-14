import React, {useState} from 'react';
import Auth from '../../utils/auth';

import { Link } from 'react-router-dom';

function Nav() {
    const [nav, setNav] = useState(false);

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <div className="w-screen h-[80px] z-10 bg-white drop-shadow-lg">
            {Auth.loggedIn() ? (
                <>
                    <div className='px-2 flex justify-between items-center w-full h-full'>
                        <div class='flex items-center'>
                            <ul className='flex text-sm'>
                                <Link to='/'>
                                    <li>Dashboard</li>
                                </Link>
                                <Link to='/singleteam'>
                                    <li>Team</li>
                                </Link>
                            </ul>
                        </div>
                        <div class='md:flex pr-4'>
                            <Link to='/'>
                                <button onClick={logout}>Logout</button>
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='px-2 flex justify-between items-center w-full h-full'>
                        <div class='flex items-center'>
                            <ul className='flex text-sm'>
                                <Link to='/'>
                                    <li>Dashboard</li>
                                </Link>
                            </ul>
                        </div>
                        <div class='md:flex pr-4'>
                            <Link to='/login'>
                                <button>Login</button>
                            </Link>
                        </div>
                    </div>
                </>
                )}
        </div>
    )
}

export default Nav;