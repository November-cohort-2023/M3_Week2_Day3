const router = require("express").Router();

const Movie = require('../models/Movie.model')




router.get('/movies',(req,res)=>{

    Movie.find()
    .then((allMovies)=>{
        res.json(allMovies)
    })
    .catch(err=>{
        console.log(err)
    })
})


router.get('/movies/:id',(req,res)=>{

   

    Movie.findById(req.params.id)
    .then((oneMovie)=>{

        if(oneMovie === null){
            res.json({errorMessage:"No movie with this ID"})
            return
        }

        res.json(oneMovie)

    })
    .catch(err=>{
        console.log(err)
        res.json(err)
    })


})


router.post('/movies',(req,res)=>{
    console.log(req.body)

    Movie.create(req.body)
    .then((createdMovie)=>{
        res.json(createdMovie)
    })
    .catch(err=>{
        console.log(err)
        res.json(err)
    })

})


router.put('/movies/:id',(req,res)=>{

    console.log(req.params)
    console.log(req.body)
    
    Movie.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((updatedMovie)=>{
        res.json(updatedMovie)
    })
    .catch(err=>{
        console.log(err)
        res.json(err)
    })
})




router.delete('/movies/:id',(req,res)=>{

    Movie.findByIdAndDelete(req.params.id)
    .then((deletedMovie)=>{
        
        res.json(deletedMovie)
    })
    .catch(err=>{
        console.log(err)
        res.json(err)
    })
})



module.exports =  router