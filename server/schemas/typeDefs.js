const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User{
        _id: ID
        username: String
        teams: [Team]
    }

    type Pokemon{
        _id: ID
        name: String
        type: String
        image: String
    }

    type Team{
        _id: ID
        pokemon: [Pokemon]
    }

    type Auth{
        token: ID
        user: User
    }

    type Query{
        me: User
        users: [User]
        user(username: String!): User
        teams(username: String): [Team]
        pokemon(name: String!): Pokemon
    }

    type Mutation{
        addUser(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addTeam(_id: ID!, pokemon: [Pokemon]): Team
        updateTeam(_id: ID!): Team
        removeTeam(_id: ID!): Team
        updateUser(username: String!, teams: [Team]): User
    }
`;

module.exports = typeDefs;