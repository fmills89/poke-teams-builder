const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		teams: [Team]
	}

	type Pokemon {
		_id: ID
		name: String
		type: String
		image: String
	}

	input PokemonInput {
		_id: ID
		name: String
		type: String
		image: String
	}

	type Team {
		_id: ID
		username: String
		pokemon: [Pokemon]
	}

	input TeamInput {
		_id: ID
		pokemon: [PokemonInput]
	}

	type Auth {
		token: ID
		user: User
	}

	type Query {
		me: User
		users: [User]
		user(username: String!): User
		teams(username: String): [Team]
		team(_id: ID!): Team
		pokemon(name: String!): Pokemon
		pokemonType(type: String!): Pokemon
	}

	type Mutation {
		addUser(username: String!, password: String!): Auth
		login(username: String!, password: String!): Auth
		addTeam(pokemon: [PokemonInput!]): Team
		removeFromTeam(teamId: ID!, pokemonId: ID!): Team
		removeTeam(_id: ID!): Team
		updateUser(username: String!, teams: [TeamInput]): User
	}
`;

module.exports = typeDefs;
