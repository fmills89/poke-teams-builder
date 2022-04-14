import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemon_details } from "../../utils/API";
import { ADD_TEAM } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

import profOak from "../../assets/professor-oak-image.png";
import snorlax from "../../assets/snorlax-image.png";
import profOakNavi from "../../assets/professoroak-navi.png";

let pokemon;

function Teams() {
	const [searchInput, setSearchInput] = useState("");
	const [savePokemon] = useMutation(ADD_TEAM);

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
				_id: items.id,
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
	};

	const handleSavePokemon = async (pokemon) => {
		const token = Auth.loggedIn() ? Auth.getToken() : null;
		console.log(token);

		if (!token) {
			return false;
		}

		console.log(pokemon);

		try {
			const { data } = await savePokemon({
				variables: {
					pokemon: {
						_id: pokemon._id,
						name: pokemon.name,
						type: pokemon.type,
					},
				},
			});
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div>
			{Auth.loggedIn() ? (
				<>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4 m-4 p-4 place-items-center md:w-full md:h-screen">
						<div class="bg-white-200 drop-shadow-lg">
							<form
								className="bg-white py-8 px-8 rounded-md"
								onSubmit={handleFormSubmit}
							>
								<div class="">
									<div className="grid grid-cols-1 place-items-center">
										<img
											class="mx-2 px-2 pt-2 md:scale-100 "
											src={profOakNavi}
											alt="professor-oak-navi"
										/>
									</div>
									<span>
										<div className="text-sm text-center">
											<p class="text-center p-4 mt-10">
												Begin by searching for a pokemon to add to your team!
											</p>
										</div>
										<div className="text-center">
											<label className="mt-3 text-left">Enter Name:</label>
											<div>
												<input
													type="text"
													name="searchInput"
													value={searchInput}
													onChange={(e) => setSearchInput(e.target.value)}
													placeholder="Name"
													className="border-red-300 mt-2 md:w-80 w-40 rounded-md"
												/>
											</div>
											<div className="flex justify-around items-baseline">
												<button type="submit" className="bg-red-500">
													Search
												</button>
											</div>
										</div>
									</span>
								</div>
							</form>
						</div>
						{pokemon ? (
							<div>
								<div class="card w-96 h-96">
									<div>
										<img className="scale-50" src={snorlax} alt="snorlax" />
									</div>
									<div>
										<span className="text-center">
											<div>
												<p className="text-sm">Name: {pokemon.name}</p>
											</div>
											{pokemon.type2 ? (
												<div>
													<p className="text-sm">
														Type: {pokemon.type}/{pokemon.type2}
													</p>
												</div>
											) : (
												<div>
													<p className="text-sm">Type: {pokemon.type}</p>
												</div>
											)}
										</span>
									</div>
									<div className="flex justify-around items-baseline">
										<button onClick={() => handleSavePokemon(pokemon)}>
											Save this pokemon!
										</button>
									</div>
								</div>
							</div>
						) : (
							<div class="card w-96 h-96">
								<div>
									<img className="scale-50" src={snorlax} alt="snorlax" />
								</div>
								<div>
									<span className="text-center">
										<div>
											<p className="text-sm">Name: Snorlax</p>
										</div>
										<div>
											<p className="text-sm">Type: Normal</p>
										</div>
									</span>
								</div>
								<div className="flex justify-around items-baseline">
									<button className="bg-red-500">Add to team!</button>
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
