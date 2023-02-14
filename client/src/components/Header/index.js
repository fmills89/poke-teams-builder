import React from 'react';
import { Link } from 'react-router-dom';
import pokedexIcon from '../../assets/pokedex-icon.png';

function Header() {
  return (
    <header>
      <div className="bg-gradient-to-r from-red-700 to-red-500 shadow-lg">
        <div className="flex items-center">
          <img src={pokedexIcon} alt="pokedex-icon" className="p-3"></img>
          <div className="">
            <Link to="/">
              <p className="text-white text-5xl font-bold p-6 ">POKE-TEAMS</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
