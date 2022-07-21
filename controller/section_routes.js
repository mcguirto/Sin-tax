const express = require('express')
const router = express.Router()
const Section = require('../models/section')

router.delete('/:id', (req, res) => {
    const sectionId = req.params.id

    Section.findByIdAndRemove(sectionId)
        .then(section => {
            res.redirect('/sections')
        })
        .catch(err => {
            res.json(err)
        })
})
router.get('/:id/edit', (req, res) => {
    const sectionId = req.params.id

    Section.findById(sectionId)
        .then(section => {
            res.render('sections/edit', { section })
        })
        .catch(err => {
            res.json(err)
        })
})


router.put('/:id', (req, res) => {
    const sectionId = req.params.id

    req.body.isCalculus = req.body.isCalculus === 'on' ? true : false

    Section.findByIdAndUpdate(sectionId, req.body, { new: true })
        .then(section => {
            res.redirect(`/sections/${section._id}`)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/new', (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    res.render('sections/new', { username, loggedIn })
})

router.post('/', (req, res) => {
    req.body.isCalculus = req.body.isCalculus === 'on' ? true : false


    
    req.body.owner = req.session.userId

    console.log(req.body)
    Section.create(req.body)
        .then(section => {
            console.log(sectio)
            res.redirect('/sections')
        })
        .catch(err => {
            res.json(err)
        })
})


router.get('/', (req, res) => {
    Section.find({})
        .then(sections => {
            res.render('sections/index', { sections })
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/mine', (req, res) => {
    Section.find({ owner: req.session.userId })
        .then(sections => {
            res.render('sections/index', { sections })
        })
        .catch(error => {
            console.log(error)
            res.json({ error })
        })
})

router.get('/:id', (req, res) => {
    const sectionId = req.params.id

    Section.findById(sectionId)
        .populate('comments.author')
        .then(section => {
            const userId = req.session.userId
            const username = req.session.username
            res.render('sections/show', { section, userId, username })
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router