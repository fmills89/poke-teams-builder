import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { REMOVE } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import profOakNavi from "../assets/professoroak-navi.png";
import snorlax from "../assets/snorlax-image.png";

function UserTeam() {
	const { loading, data } = useQuery(QUERY_ME);
	const userData = data?.me || {};
	const [removePokemon] = useMutation(REMOVE);
	console.log(userData);

	const [ownedPokemon, setOwnedPokemon] = useState([]);

	useEffect(() => {
		setOwnedPokemon(userData.teams);
	}, [userData.teams]);
	console.log(ownedPokemon);
    
    const handleRemovePokemon = async (pokemonId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        console.log(pokemonId);
        if (!token) {
            return false;
        }

        try {
            const { data } = await removePokemon({
                variables: {
                    id: pokemonId,
                },
            });
        } catch (err) {
            console.error(err);
        }
    };
    return(
        <section>
            <div className='grid grid-flow-row auto-rows-max place-items-center'>
                <div className='w-1/3 md:h-[120px] h-40 mt-6 z-10 bg-white drop-shadow-lg rounded-md'>
                    <div className='h-2 bg-gradient-to-r from-yellow-500 to-red-500 rounded-t-md'></div>
                        <div>
                            <p className='text-center mt-2 p-4'>Welcome to your team's page!</p>
                        </div>
                    </div>
                <div className='w-3/4 md:h-48 h-80 mt-6 z-10 bg-white drop-shadow-lg rounded-md'>
                    <div className='h-2 bg-gradient-to-r from-yellow-500 to-red-500 rounded-t-md'></div>
                        <div className='flex'>
                            {/* <div className='w-1/3'>
                                <img
                                    className='mx-2 mt-6 hidden'
                                    src={profOakNavi}
                                    alt='professor oak navi'
                                />
                            </div> */}
                            <div className='md:w-full min-w-0'>
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
            <div className='grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 md:gap-4 gap-10 m-4 p-4 xl:w-full xl:h-screen place-items-center'>
                {ownedPokemon !== undefined ? (
                    ownedPokemon.map((pokemon) => {
                        return (
                            <div className='card md:w-96 md:h-96 w-80 h-80'>
                                <div className=''>
                                    <img
                                        className='scale-50'
                                        src={snorlax}
                                        alt='snorlax' 
                                    />
                                    <div>
                                        <span className='text-center'>
                                            <div>
                                                <p className='text-sm' key={pokemon.id}>
                                                    Name: {pokemon.pokemon[0].name}
                                                </p>
                                            </div>
                                            <div>
                                                <p className='text-sm' key={pokemon.id}>
                                                    Type: {pokemon.pokemon[0].type}
                                                </p>
                                            </div>
                                        </span>
                                        <div className="flex justify-around items-baseline">
											<button onClick={() => handleRemovePokemon(pokemon._id)}>
												Remove
											</button>
										</div>
                                    </div>
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
}

export default UserTeam;
