const mongoose = require("mongoose");
const pokemonSchema = require("./Pokemon");

const { Schema } = mongoose;

const teamSchema = new Schema({
	username: {
		type: String,
		require: true,
	},
	pokemon: {
		type: [pokemonSchema],
		validate: [arrayLimit, "Cannot have more than 6 Pokemon in a team!"]
	}
});

function arrayLimit(val) {
	return val.length <= 6;
}

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
