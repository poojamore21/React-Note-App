const authenticate =(req,res,next)=>{
    console.log("auth middleware called")
    next();
}

module.exports = authenticate;