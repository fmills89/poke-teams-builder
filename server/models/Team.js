const mongoose = require('mongoose');

const { Schema } = mongoose;
const pokemonSchema = require('./Pokemon');

const teamSchema = new Schema({
    pokemon: [{
        type: String,
        ref: pokemonSchema,
        validate: [arrayLimit, 'Must not exceed 6 pokemon']
    }]
});

function arrayLimit(val) {
    return val.length <= 6;
}

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;