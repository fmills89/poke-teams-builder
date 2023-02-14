import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { REMOVE } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import profOakNavi from '../assets/professoroak-navi.png';
import snorlax from '../assets/snorlax-image.png';
// import { set } from '../../../server/models/Pokemon';

function UserTeam() {
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || {};
  const [removePokemon] = useMutation(REMOVE);

  const [ownedPokemon, setOwnedPokemon] = useState([]);

  useEffect(() => {
    setOwnedPokemon(userData.teams);
  }, [userData.teams]);

  const handleRemovePokemon = async pokemonId => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log('clicked');

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
  return (
    <section>
      <div className="grid grid-flow-row auto-rows-max place-items-center pt-20">
        <div className="w-1/3 md:h-[120px] h-40 mt-6 z-10 bg-white drop-shadow-lg rounded-md">
          <div className="h-2 bg-gradient-to-r from-yellow-500 to-red-500 rounded-t-md"></div>
          <p className="text-center mt-2 p-4">Welcome to your team's page!</p>
        </div>
        <div className="w-3/4 md:h-48 h-80 mt-6 z-10 bg-white drop-shadow-lg rounded-md">
          <div className="h-2 bg-gradient-to-r from-yellow-500 to-red-500 rounded-t-md"></div>
          <div className="flex justify-around">
            <div className="w-1/3">
              <img
                className="mx-2 mt-6 md:scale-100 scale-75"
                src={profOakNavi}
                alt="professor oak navi"
              />
            </div>
            <div className="md:w-full w-1/2">
              <p className="text-center mt-4 p-4 text:xs md:text-sm">
                Here you can edit your team! Simply click the remove button and
                head back to the dashboard to add more pokemon!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 md:gap-20 gap-10 m-2 p-2 xl:w-full xl:h-screen place-items-center">
        {ownedPokemon !== undefined ? (
          ownedPokemon.map((pokemon, i) => {
            return (
              <div className="card md:w-96 md:h-96 w-80 h-80" key={i}>
                <img className="scale-50" src={snorlax} alt="snorlax" />
                <span className="text-center">
                  <p className="text-sm">Name: {pokemon.pokemon[0].name}</p>
                  <p className="text-sm">Type: {pokemon.pokemon[0].type}</p>
                </span>
                <div className="flex justify-around items-baseline">
                  <form onSubmit={() => handleRemovePokemon(pokemon._id)}>
                    <button>Remove</button>
                  </form>
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
