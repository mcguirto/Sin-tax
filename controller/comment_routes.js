const express = require('express')
const router = express.Router()
const Section = require('../models/section')


router.post('/:sectionId', (req, res) => {
    const sectionId = req.params.sectionId
    req.body.author = req.body.userId

    Section.findById(sectionId)
        
        .then(section => {
            section.comments.push(req.body)

            
            return section.save()
        })
        .then(section => {
            res.redirect(`/sections/${section._id}`)
        })
        .catch(err => {
            res.json(err)
        })
})

router.delete('/delete/:sectionId/:commId', (req, res) => {
    const sectionId = req.params.sectionId
    const commId = req.params.commId

    Section.findById(sectionId)
        .then(section => {
            const comment = section.comments.id(commId)

            
            comment.remove()


            return section.save()
        })
        .then(section => {
            res.redirect(`/sections/${sectionId}`)
        })
        .catch(err => {
            res.send(err)
        })
    
})

module.exports = router