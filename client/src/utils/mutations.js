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
	mutation addTeam() {
		addTeam() {
		}
	}
`;

// addUser(username: String!, password: String!): Auth
// login(username: String!, password: String!): Auth
// addTeam(_id: ID!, pokemon: [Pokemon]): Team
// updateTeam(_id: ID!): Team
// removeTeam(_id: ID!): Team
// updateUser(username: String!, teams: [Team]): User
