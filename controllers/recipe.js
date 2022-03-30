const router = require('express').Router()
const db = require('../models')
const recipe = require('../models/recipe')

// | GET | index | /recipes | list all recipes |
router.get('/recipes', async (req, res) =>{
    try {
        const recipes = await db.Recipe.find({})
        // send message
        // console.log('love')
        // all recipes
        res.json(recipes)
    } catch (err) {
        console.log(err)
        res.status(503).json ({message: 'the db server is down'})
    }
})

// | POST | create | /recipes | add a new recipe |
router.post('/recipes', (req, res) => {
        db.Recipe.create(req.body)
        .then(newRecipe => {
            res.json(newRecipe)
        })
        // handle error
         .catch(console.log)
})
    

// module.export
module.exports = router