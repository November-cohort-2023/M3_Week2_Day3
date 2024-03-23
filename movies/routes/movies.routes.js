const router = require("express").Router();

const Director = require("../models/Director.model");
const Movie = require('../models/Movie.model')




router.get('/movies',(req,res)=>{

    // Add populate() to all the get routes
    Movie.find()
    .populate("director")
    .then((allMovies)=>{
        res.json(allMovies)
    })
    .catch(err=>{
        console.log(err)
    })
})


router.get('/movies/:id',(req,res)=>{

   

    Movie.findById(req.params.id)
    .populate('director')
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
        return Director.findByIdAndUpdate(req.body.director,{$push:{movies:createdMovie._id}})
    })
    .then(director=>{
        res.json(director)
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