const { signToken } = require("../utils/auth");
const { User, Team, Pokemon } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id })
					.select("-__v -password")
					.populate("teams");

				return userData;
			}
			throw new AuthenticationError("Not logged in");
		},
		users: async () => {
			return User.find().select("-__v -password").populate("teams");
		},
		user: async (parent, { username }) => {
			return User.findOne({ username })
				.select("-__v -password")
				.populate("teams");
		},
		teams: async (parent, { username }) => {
			const params = username ? { username } : {};
			return Team.find(params);
		},
		team: async (parent, { _id }) => {
			return Team.findOne({ _id });
		},
		pokemon: async (parent, { name }) => {
			return Pokemon.findOne({ name });
		},
		pokemonType: async (parent, { type }) => {
			return Pokemon.find({ type });
		},
	},
	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
		updateUser: async (parent, args, context) => {
			if (context.user) {
				return await User.findByIdAndUpdate(context.user.id, args, {
					new: true,
				});
			}
		},
		login: async (parent, { username, password }) => {
			const user = await User.findOne({ username });

			if (!user) {
				throw new AuthenticationError("Incorrect credentials");
			}
			const correctPwd = await user.isCorrectPassword(password);

			if (!correctPwd) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const token = signToken(user);
			return { token, user };
		},
		addTeam: async (parent, args, context) => {
			if (context.user) {
				console.log(context.user);
				console.log(context.user._id);
				const newTeam = await Team.create();

				await User.findByIdAndUpdate(
					console.log(newTeam),
					{ _id: context.user._id },
					{ $push: { teams: newTeam._id } },
					{ new: true }
				);
				return newTeam;
			}
			throw new AuthenticationError("You must be logged in");
		},
		addToTeam: async (parent, { teamId, pokemonInput }, context) => {
			if (context.user) {
				const updatedTeam = await Team.findOneAndUpdate(
					{ _id: teamId },
					{ $addToSet: { pokemon: pokemonInput } },
					{ new: true }
				);

				return updatedTeam;
			}
			throw new AuthenticationError("You need to be logged in!");
		},
		removeFromTeam: async (parent, { teamId, pokemonId }, context) => {
			if (context.user) {
				const updatedTeam = await Team.findOneAndUpdate(
					{ _id: teamId },
					{ $pull: { pokemon: pokemonId } },
					{ new: true }
				);
				return updatedTeam;
			}
			throw new AuthenticationError("You need to be logged in!");
		},
		removeTeam: async (parent, { _id }, context) => {
			if (context.user) {
				return Team.findByIdAndDelete({ _id });
			}
			throw new AuthenticationError("You need to be logged in");
		},
	},
};

module.exports = resolvers;
