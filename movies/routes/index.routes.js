const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});


router.get('/juan',(req,res)=>{

  res.json("JUANS ROUTE")
})



module.exports = router;
