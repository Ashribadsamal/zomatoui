const express=require('express');
const bodyparser=require("body-parser");
const path=require('path');
const http=require('http');
const app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));



app.use(express.static(path.join(_dirname,"build")));

app.get('/',(req,res)=>{
    res.sendFile(path.join(_dirname,'build/index.html'));

})

app.get("/product",(req,res)=>{
    res.send('hii')
})


const port=process.env.PORT || '3053';
app.set('port',port);
const server=http.createServer(app);
server.listen(port,()=>console.log(`Running on localhost:${port}`));