import React, {useState} from 'react';

import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

function Nav() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div className="w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg">
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <Link to='/'>
                        <h1 className='text-base font-bold mr-4 sm:text-1xl'>Dashboard</h1>
                    </Link>
                    <ul className='hidden md:flex'>
                        <li>Teams</li>
                        <li>Trainer</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <Link to='/login'>
                        <button className='border-none bg-transparent text-black mr-4 px-8 py-3'>
                            Log In
                        </button>
                    </Link>
                    <Link to='/signup'>
                        <button className='px-8 py-3'>
                            Sign Up
                        </button>
                    </Link>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {/* if opposite of nav is true execute menuicon else display 'x' icon */}
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}   
                </div>
            </div>
            {/* if nav is not true display hidden else display absolute */}
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'>Teams</li>
                <li className='border-b-2 border-zinc-300 w-full'>Trainer</li>
                <div className='flex flex-col my-4'>
                    <Link to='/login'>
                        <button className='bg-transparent text-black-600 px-8 py-3 mb-4'>
                            Login
                        </button>
                    </Link>
                    <Link to='/signup'>
                        <button className='px-8 py-3'>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </ul>

        </div>
    )
}

export default Nav;