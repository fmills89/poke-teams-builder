import React from 'react';

function Footer() {
    return (
        <footer className="bg-red-700 shadow-lg">
            <div className="container mx-auto">
            <div className="sm:flex justify-left">
                <p className="text-white text-sm font-bold p-3">
                    Made with
                </p>
                <img
                    src={require('../../assets/pokeball-heart-icon.png')}
                    alt='pokeball-heart'
                    className=''
                ></img>
            </div>
            </div>
        </footer>
    )
};

export default Footer;