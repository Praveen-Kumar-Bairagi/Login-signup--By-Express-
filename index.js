const {accessToken,generatToken}=require('./auth/auth') 
const express=require('express')
const app=express();
app.use(express.json())

const home =require('./routers/router');
app.use('/',home)
app.listen(2039,()=>{
    console.log("running.....")
})