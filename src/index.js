'use strict';
import express from 'express';
import cors from 'cors';

const app=express();
app.use(cors());

app.get('/task2A',(req,res)=>{
    const sum = +(req.query.a||0) + +(req.query.b||0);
    res.send(sum.toString());
});
app.listen(1000,()=>{
    console.log('Server Started. Listening on port 1000!');
});

//полезно:
//https://blog.jetbrains.com/webstorm/2015/05/ecmascript-6-in-webstorm-transpiling/