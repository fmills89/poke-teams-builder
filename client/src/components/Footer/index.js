import React from 'react';

import pokeHeart from '../../assets/pokeball-heart-icon.png'

function Footer() {
    return (
        <footer className="bg-red-700 shadow-lg">
            <div className='flex items-center p-4'>
                {/* <div className="sm:flex justify-left"> */}
                    <p className="text-white text-sm font-bold p-3">
                        Made with
                    </p>
                    <img
                        src={pokeHeart}
                        alt='pokeball-heart'
                        className='scale-75'
                    ></img>
                {/* </div> */}
            </div>
        </footer>
    )
};

export default Footer;