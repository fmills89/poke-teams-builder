const { Schema } = require('mongoose');

const pokemonSchema = new Schema({

    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
    
});

module.exports = pokemonSchema;