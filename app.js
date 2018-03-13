const express = require('express');
const app = express();

const logParams = (req,res, next) => {
    console.log('this is middleware');
    console.log('req.params', req.params.id);
    console.log('req.url from our middleware', req.url );
    next();
}

// middlewares
app.use(logParams);
// 
// respond with 'hello world' when a  get request is made to the homepage
app.get("/", function(req,res){
    res.send('hello world');
})

app.listen(8080, ()=>{
    console.log('listening on port 8080');
    
})