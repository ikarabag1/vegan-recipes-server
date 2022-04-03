const router = require('express').Router()
const db = require('../models')
const recipe = require('../models/recipe')
const requiresToken = require('./requiresToken')

// | GET | index | all recipes in db created by all users | ***working
router.get('/', async (req, res) => {
    try {
        const recipes = await db.Recipe.find({})
        res.json(recipes)
    } catch (err) {
        console.log(err)
        res.status(503).json({
            message: 'the db server is down'
        })
    }
})

// | GET | index | all recipes created by a specific user | --working good with the one on top but in conflict with single recipe GET show route???
router.get('/:userid', async (req, res) => {
    try {
        const allRecipes = await db.Recipe.find({
            user: req.params.userid
        })
        res.json(allRecipes)
    } catch (err) {
        console.log(err)
        res.status(503).json({
            message: 'the db server is down'
        })
    }
})

// | POST | create | add a new recipe by a specific user | *** working fine
router.post('/:userid', async (req, res) => {
    try {
        const foundUser = await db.User.findById(req.params.userid)
        const newRecipe = await db.Recipe.create({
            title: req.body.title,
            ingredient: req.body.ingredient,
            direction: req.body.direction,
            nutrition: req.body.nutrition
        })
        newRecipe.user = foundUser.id
        foundUser.recipes.push(newRecipe.id)
        await newRecipe.save()
        await foundUser.save()
        res.json(newRecipe)
        // handle error
    } catch (err) {
        console.log(err)
        res.status(503).json({
            message: 'recipe not created'
        })
    }
})


// // | GET | show | show the specific recipe of the user | --working fine with the first one but in conflict with all reciepes bu a specific user GET route
router.get('/user/:id', async (req, res) => {
    try {
        const recipe = await db.Recipe.findById(req.params.id)
            if (!recipe)
                return res.status(404).json({
                    message: 'recipe can not found'
                })
            res.json(recipe)
    } catch (err) {
            if (err.name === 'CastError')
                return res.status(404).json({
                    message: 'recipe not found, id error'
                })
            res.status(503).json({
                message: 'server burned down'
            })
        }
})

// | PUT/PATCH | update | edit a recipe | *** working fine
router.put('/:id', async (req, res) => {
    try {
        const recipe = await db.Recipe.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if (!recipe)
            return res.status(404).json({
                message: 'not atm'
            })
        res.json(recipe)
    } catch (err) {
        // console.log(err)
        res.status(503).json({
            message: 'server won\'t do that'
        })
    }
})

// | DELETE | destroy sprecific recipe | *** 
router.delete('/:id', async (req, res) => {
    try {
        const recipe = await db.Recipe.findByIdAndDelete(req.params.id)
        if (!recipe)
            return res.status(404).json({
                message: 'not atm'
            })
        res.json(recipe)
    } catch (err) {
        // console.log(err)
        res.status(503).json({
            message: 'server won\'t do that'
        })
    }
})

// module.export
module.exports = router