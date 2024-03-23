const router = require('express').Router()



router.get('/',(req,res)=>{
    res.json("actors")
})





module.exports = router