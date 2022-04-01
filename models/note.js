const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    review: {
        type: String,
    },
    recipe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

module.exports = mongoose.model('Note', noteSchema)