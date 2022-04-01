const router = require('express').Router()
const note = require('../models/note')
const db = require('../models')
const requiresToken = require('./requiresToken')

// | POST | create | insert a note or review to a specific recipe |
router.post ('/:id', async (req, res) => {
    try {
        const foundRecipe = await db.Recipe.findById(req.params.id)
        const newNote = await db.Note.create({
            review: req.body.review
        })
        newNote.recipe = foundRecipe.id
        foundRecipe.notes.push(newNote.id)
        await newNote.save()
        await foundRecipe.save()
        res.json(newNote) //should it be recipe since display it together
    } catch (err) {
        console.log(err)
        res.status(503).json({
            message: 'note not created'
        })
    }
})

//  | PATCH | edit | update a note |
router.patch('/:id', async (req, res) => {
    try {
        const note = await db.Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.json(note) 
    } catch (err) {
        res.status(503).json({
            message: 'server won\'t do that'
        })
    }
})
// module.export
module.exports = router
