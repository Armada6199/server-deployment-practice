module.exports=(err,req,res,next)=>{
res.status(500).json({
    code:500,
    route:req.originalUrl,
    query:req.query,
    body:req.body,
    message:`Server Erorr ${err.message}`
})
}