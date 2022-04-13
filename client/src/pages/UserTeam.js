import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import profOakNavi from "../assets/professoroak-navi.png";
import snorlax from "../assets/snorlax-image.png"

function UserTeam() {
    const { loading, data } = useQuery(QUERY_ME)
    const userData = data?.me || {};
    console.log(userData);
    // console.log(userData.teams[1].pokemon[0].name);

    const [ownedPokemon, setOwnedPokemon] = useState([]);

    useEffect(() => {
        setOwnedPokemon(userData.teams);
    }, [userData.teams])
    console.log(ownedPokemon);

    return(
        <section>
            <div className='grid grid-flow-row auto-rows-max place-items-center'>
                <div className='w-1/3 md:h-[120px] h-40 mt-6 z-10 bg-zinc-200 drop-shadow-lg rounded-md'>
                    <div className='h-2 bg-gradient-to-r from-yellow-500 to-red-500 rounded-t-md'></div>
                        <div>
                            <p className='text-center mt-2 p-4'>Welcome to your team's page!</p>
                        </div>
                    </div>
                <div className='w-3/4 md:h-48 h-80 mt-6 z-10 bg-zinc-200 drop-shadow-lg rounded-md'>
                    <div className='h-2 bg-gradient-to-r from-yellow-500 to-red-500 rounded-t-md'></div>
                        <div className='flex'>
                            <div className='w-1/3'>
                                <img
                                    className='mx-2 mt-6'
                                    src={profOakNavi}
                                    alt='professor oak navi'
                                />
                            </div>
                            <div className='w-2/3'>
                                <p className='text-center mt-4 p-4 text:xs md:text-sm'>
                                    Here you can edit your team!
                                    Simply click the remove button
                                    and head back to the dashboard
                                    to add more pokemon!
                                </p>
                            </div>
                        </div>
                </div>
            </div>
            <div className='grid grid-col-1 md:grid-cols-3 gap-4 m-4 p-4  w-full h-screen'>
                {ownedPokemon.teams !== undefined ? (
                    ownedPokemon.teams.map((pokemon) => {
                        return (
                            <div className='card w-96 h-96'>
                                <div>
                                    <img
                                        className='scale-50'
                                        src={snorlax}
                                        alt='snorlax' 
                                    />
                                </div>
                                <div>
                                    <span className='text-center'>
                                        <div>
                                            Name: <p className='text-sm' key={pokemon.id}>{pokemon.name}</p>
                                        </div>
                                        <div>
                                            Type:
                                        </div>
                                        <div className='flex justify-around items-baseline'>
                                            <button>
                                                Remove
                                            </button>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div>No Pokemon</div>
                )}
            </div>
        </section>

    );
};

export default UserTeam;