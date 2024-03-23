const Actor = require('../models/Actor.model')

const router = require('express').Router()



router.get('/',(req,res)=>{
    res.json("actors")
})


router.post('/actors',(req,res)=>{

    Actor.create(req.body)
    .then(createdActor=>{

        res.json(createdActor)
    })
})





module.exports = router