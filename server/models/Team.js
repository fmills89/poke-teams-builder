const mongoose = require("mongoose");
const pokemonSchema = require("./Pokemon");

const { Schema } = mongoose;

const teamSchema = new Schema({
	username: {
		type: String,
		require: true,
	},
	pokemon: [pokemonSchema]
	// pokemon: [
	// 	{
	// 		type: String,
	// 		ref: 'Pokemon',
	// 		validate: [arrayLimit, "Must not exceed 6 pokemon"],
	// 	},
	// ],
});

function arrayLimit(val) {
	return val.length <= 6;
}

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
