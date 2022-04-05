import React from 'react';
import pokeHeart from '../../assets/pokeball-heart-icon.png'
// import gitIcon from '../../assets/github-icon.png'

function Footer() {
    return (
        <footer className='w-full mt-24 bg-red-700 text-gray-300 py-y px-2 shadow-lg'>
            <div className='max-w-[1240px] max-auto flex items-center'>
                    <h6>Made with </h6>
                    <img
                        className='scale-75'
                        src={pokeHeart} alt="pokeball shaped heart" />
                    {/* <img
                        className='scale-75 '
                        src={gitIcon} alt='github logo' /> */}
            </div>
        </footer>
    )
};

export default Footer;