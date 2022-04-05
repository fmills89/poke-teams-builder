import React from 'react';

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
                            <p className="text-white text-5xl font-bold p-6">POKE-TEAMS</p>
                        </div>
                </div>
            </div>
        </header>
    )
}

export default Header;