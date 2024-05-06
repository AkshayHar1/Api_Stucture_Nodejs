const express = require("express");
const router = express.Router();

router.use('/health',require('./health/healthRouter'))

// router.get('/health',async(req,res)=>{
//     res.json({ status: "ok" });
// })


module.exports=router;