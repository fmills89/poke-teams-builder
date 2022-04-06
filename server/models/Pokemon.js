const mongoose = require('mongoose');

const { Schema } = mongoose;

const teamSchema = new Schema({
    pokemon:{
        type: String,
        required: true
    }
});


const Team = mongoose.model('Team', teamSchema);

module.exports = Team;