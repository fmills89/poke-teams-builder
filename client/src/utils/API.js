const fetch = require("node-fetch");

async function fetchGraphQL(query, variables, operationName) {
	const result = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
		method: "POST",
		body: JSON.stringify({
			query: query,
			variables: variables,
			operationName: operationName,
		}),
	});

	return await result.json();
}

function fetchPokemon_details(name) {
	const query = `
    query pokemon_details($name: String) {
        species: pokemon_v2_pokemonspecies(where: {name: {_eq: $name}}) {
          name
          id
          pokemon_v2_pokemons_aggregate {
            nodes {
              pokemon_v2_pokemontypes {
                pokemon_v2_type {
                  name
                }
              }
            }
          }
        }
      }
    `;

	return fetchGraphQL(query, { name: name }, "pokemon_details");
}

function listByType(name) {
	const query = `
    query listByType($name: String) {
        pokemon_v2_pokemonspecies(where: {pokemon_v2_pokemons: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_eq: $name}}}}}, order_by: {id: asc}) {
          id
          name
          pokemon_v2_pokemons {
            pokemon_v2_pokemontypes {
              pokemon_v2_type {
                name
              }
            }
          }
        }
      }
    `;

	return fetchGraphQL(query, { name: name }, "listByType");
}

module.exports = {
    fetchPokemon_details
};