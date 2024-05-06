exports.health=()=>{
    try{
       return  {status: "ok"}
    }
    catch(err){
        console.log(err);

    }

}