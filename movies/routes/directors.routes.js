const Director = require('../models/Director.model')

const router = require('express').Router()




router.post('/directors',(req,res)=>{

    Director.create(req.body)
    .then(createdDirector=>{

        res.json(createdDirector)
    })

})



router.get('/directors',(req,res)=>{

    Director.find()
    .populate('movies')
    .then((allDirectors)=>{
        res.json(allDirectors)
    })
})









module.exports = router