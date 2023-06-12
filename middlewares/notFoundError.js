module.exports=(req,res)=>{
    res.status(404).json({
        message:'Sorry the page you requested is not found ',
        cod:404,
        route:req.originalUrl
    })
}