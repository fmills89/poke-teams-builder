import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
             <div className="bg-red-700 shadow-lg">
                <div className="flex items-center">
                    <img
                        src={require('../../assets/pokedex-icon.png')}
                        alt='pokedex-icon'
                        className='p-3'
                    ></img>
                        <div className="">
                            <Link to='/'>
                                <p className="text-white text-5xl font-bold p-6">POKE-TEAMS</p>
                            </Link>
                        </div>
                </div>
            </div>
        </header>
    )
}

export default Header;