const express=require('express');
const stamper = require('./middlewares/stamper');
const app=express();
const pageNotFound=require('./middlewares/notFoundError');
const internalServarError=require('./middlewares/internalServerError');
app.get('/',stamper,(req,res)=>{
    res.json({
        message:'you are on the home page',
        date:req.stamper
    })
});
app.get('/bad',(req,res)=>{
    console.log(errorTest)
})
app.use('*',pageNotFound);
app.use(internalServarError)
function serverStart(PORT){
    app.listen(PORT,()=>{
        console.log(`listing on port ${PORT}`)
    })
}
module.exports={serverStart,app}