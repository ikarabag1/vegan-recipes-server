const mongoose = require('mongoose')
const {
    stringify
} = require('nodemon/lib/utils')

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    ingredients: {
        type: String,
        required: true,
        unique: true
    },
    directions: {
        type: String,
        required: true,
        unique: true
    },
    nutritions: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
        unique: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }],
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
      }]
    }, {timestamps: true})


module.exports = mongoose.model('Recipe', recipeSchema)