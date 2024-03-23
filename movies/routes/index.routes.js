const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});


router.get('/juan',(req,res)=>{

  res.json("JUANS ROUTE")
})

router.get('/movies',(req,res)=>{


  res.json('ALL MOVIES')
})


module.exports = router;
