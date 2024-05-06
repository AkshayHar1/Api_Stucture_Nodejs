const {healthService}=require('../../service/index')

 exports.health =async(req,res,next)=>{
    try{
        return res.status(200).json({
            data: healthService.health(),
            Success:"SUCCESS"
        })
    }
    catch(err){
        console.log("Error from controller health",err);
        next(err)
    }
}


