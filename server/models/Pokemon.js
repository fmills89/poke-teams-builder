const { Schema } = require('mongoose');

const pokemonSchema = new Schema({

    pokemon: {
        type: String,
        required: true
    }
});

module.exports = pokemonSchema;