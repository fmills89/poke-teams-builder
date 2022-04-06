const mongoose = require('mongoose');

const { Schema } = mongoose;
const Pokemon = require('./Pokemon');

const teamSchema = new Schema({
    pokemon: [Pokemon],
    validate: [arrayLimit, 'Must not exceed 6 pokemon']
});

function arrayLimit(val) {
    return val.length <= 6;
}

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;