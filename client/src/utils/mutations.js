import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username: String!, $password: String!) {
		addUser(username: $username, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_TEAM = gql`
	mutation addTeam($pokemon: [PokemonInput!]) {
		addTeam (pokemon: $pokemon){
			username
			_id
				pokemon{
					_id
					name
					type
					image
				}
		}
	}
`;

// addUser(username: String!, password: String!): Auth
// login(username: String!, password: String!): Auth
// addTeam(pokemon: [PokemonInput]!): Team
// addToTeam(teamId: ID!, pokemon: PokemonInput!): Team
// removeFromTeam(teamId: ID!, pokemonId: ID!): Team
// removeTeam(_id: ID!): Team
// updateUser(username: String!, teams: [TeamInput]): User
