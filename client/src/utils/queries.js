import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
		_id
		username
		teams: {
			_id
			pokemon
		}
    }
  }
`;

export const QUERY_USER = gql`
query user($username: String!) {
	user(username: $username) {
		_id
		username
		teams {...{_id}}}   
	}
}
`;

export const QUERY_ALL_USERS = gql`
	query users {
		users {
			_id
			username
		}
	}
`;

export const QUERY_ALL_TEAMS = gql`
query teams($username: String!) {
	user(username: $username) {
 	teams {...{_id}}}   
	}
}
`;

export const QUERY_TEAM = gql`
	query team($_id: ID!) {
		team(_id: $_id) {
			_id
			pokemon
		}
	}
`;

export const QUERY_POKEMON = gql`
	query pokemon($name: String) {
		species: pokemon_v2_pokemonspecies(where: { name: { _eq: $name } }) {
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

export const QUERY_BY_TYPE = gql`
	query listByType($name: String) {
		pokemon_v2_pokemonspecies(
			where: {
				pokemon_v2_pokemons: {
					pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _eq: $name } } }
				}
			}
			order_by: { id: asc }
		) {
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
