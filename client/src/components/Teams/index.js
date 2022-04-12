import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { fetchPokemon_details } from "../../utils/API";

import profOak from "../../assets/professor-oak-image.png";
import snorlax from "../../assets/snorlax-icon.png";
import profOakNavi from "../../assets/professoroak-navi.png";

let pokemon;

function Teams() {
	const [searchInput, setSearchInput] = useState("");
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		if (!searchInput) {
			return false;
		}

		let items;

		try {
			const response = await fetchPokemon_details(searchInput.toLowerCase());
			items = response.data.species[0];
			console.log(items.data);

			pokemon = {
				name: items.name,
				type: items.pokemon_v2_pokemons_aggregate.nodes[0]
					.pokemon_v2_pokemontypes[0].pokemon_v2_type.name,
			};

			if (
				items.pokemon_v2_pokemons_aggregate.nodes[0].pokemon_v2_pokemontypes
					.length > 1
			) {
				pokemon.type2 =
					items.pokemon_v2_pokemons_aggregate.nodes[0].pokemon_v2_pokemontypes[1].pokemon_v2_type.name;
			}

			console.log(pokemon);
			console.log("type2 =" + pokemon.type2);

			setSearchInput("");
		} catch (err) {
			console.error(err);
		}

		//return pokemon;
	};
	return (
		<div>
			{Auth.loggedIn() ? (
				<>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mb-8 px-10 pb-64 w-full md:h-screen max-h-full">
						<div class="card">
							<div class="mt-8 bg-white shadow-md sm:rounded-lg rounded-lg text-left">
								<div class="md:flex-wrap flex">
									<img
										class="mx-2 px-2 pt-2 md:scale-100 scale-75"
										src={profOakNavi}
										alt="professor-oak-navi"
									/>
									<p class="text-center p-4 mt-10">
										Begin by searching for a pokemon to add to your team!
									</p>
								</div>
								<div className="h-2 bg-red-400 rounded-t-md"></div>
								<form
									className="py-8 px-8 rounded-md"
									onSubmit={handleFormSubmit}
								>
									<label className="block mt-3 font-semibold">
										Enter Name:
									</label>
									<input
										type="text"
										name="searchInput"
										value={searchInput}
										onChange={(e) => setSearchInput(e.target.value)}
										placeholder="Name"
										className="border-red-300 w-full h-5 px-3 py-5 my-2 rounded-md"
									/>
									<div className="flex justify-around items-baseline">
										<button type="submit" className="bg-red-500">
											Search
										</button>
									</div>
								</form>
							</div>
						</div>
						{pokemon ? (
							<div class="card p-20">
								<div class="card">
									<img src={snorlax} alt="snorlax" />
									<span>
										<div>Name: {pokemon.name}</div>
										{pokemon.type2 ? (
											<div>
												Type: {pokemon.type}/{pokemon.type2}
											</div>
										) : (
											<div>Type: {pokemon.type}</div>
										)}
									</span>
									<button>Add to team!</button>
								</div>
							</div>
						) : (
							<div class="card p-20">
								<div class="card">
									<img src={snorlax} alt="snorlax" />
									<span>
										<div>Name: Snorlax </div>
										<div>Type: Normal </div>
									</span>
									<button>Add to team!</button>
								</div>
							</div>
						)}
					</div>
				</>
			) : (
				<>
					<div className="w-full h-screen flex flex-col justify-between px-10 pb-64">
						<div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
							<div>
								<img className="" src={profOak} alt="professor oak" />
							</div>
							<div className="flex flex-col justify-center items-center sm:items-center w-full px-2 py-8">
								<p className="text-2xl text-center py-13 pb-6">
									Welcome to Poke-Teams! Create an account to start building
									teams!
								</p>
								<Link to="/login">
									<button className="py-3 px-6 sm:w-full">Get Started</button>
								</Link>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default Teams;
