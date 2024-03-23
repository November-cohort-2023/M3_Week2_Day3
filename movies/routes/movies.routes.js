const router = require("express").Router();


router.get('/',(req,res)=>{

    res.json("ALL MOVIES")
})


router.get('/',(req,res)=>{

    res.json("Duplicate route")
})


module.exports =  router