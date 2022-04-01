const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        
    },
    ingredient: {
        type: String,
        required: true,
        
    },
    direction: {
        type: String,
        required: true,
        
    },
    nutrition: {
        type: String,
        required: true,
        
    },
    image: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
      }]
    }, {timestamps: true})


module.exports = mongoose.model('Recipe', recipeSchema)