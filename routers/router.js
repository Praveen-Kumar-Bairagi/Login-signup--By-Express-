const express=require('express');
const {accessToken,generatToken}=require('../auth/auth') 
const knex=require('../database/db');
const app=express();
const router=express.Router();
const jwt=require("jsonwebtoken")

router.get('/home',(req,res)=>{
    res.send("this is your home page")
})

/////////////////////signup///////////////////

router.post('/signup',(req,res)=>{
    knex.select('*').from('information').where('email',req.body.email).then((data)=>{
        if(data.length<1){
            const userdata={
                id:req.body.id,
                name:req.body.name,
                email: req.body.email,
                password:(req.body.password,10)
            }
                data1={email:userdata.email}
                const token=generatToken(data1)
                 res.cookie('token',token)
            
            knex('information').insert(userdata).then((data)=>{
                res.send({"data":"insert"})}
            )}
        else{
            res.send("data already exits you can login")
        }
    })
})
////////////////////////logoin///////////

router.get('/login',accessToken,(req,res)=>{
    knex.select('*').from('information').where('email',req.body.email).then((data)=>{
        if((data <1)){
            res.send("1st signup")
        }else if (data[0].password!== req.body.password){
            res.send("you input wrong password ")
        }else{
            res.send("login succed")
        }
    })
})



module.exports=router;