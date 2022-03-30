const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    ingredient: {
        type: String,
        required: true,
        unique: true
    },
    direction: {
        type: String,
        required: true,
        unique: true
    },
    nutrition: {
        type: String,
        required: true,
        unique: true
    },
    image: String,
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