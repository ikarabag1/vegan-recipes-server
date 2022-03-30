const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    review: {
        type: String,
        required: true,
        unique: true
    },
    recipe: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {timestamps: true})

module.exports = mongoose.model('Note', noteSchema)