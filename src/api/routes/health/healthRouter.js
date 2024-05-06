const router=require('express').Router()
// const healthController  =require('../../controller/index')
const {healthController}= require("../../controller/index")

router.route('/project').get(healthController.health)



module.exports=router;

