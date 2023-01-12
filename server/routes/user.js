const express=require('express');
const router=express.Router();
const db=require('../db');
const utils=require('../utils');
const crypto=require('crypto-js');
const { query } = require('express');

router.post('/signup',(req,res)=>{
    const { fname, lname, email, pwd}=req.body

    //encrypt
    const encrypts=crypto.MD5(pwd);
const query=`insert into user (fname,lname,email,pwd) values ('${fname}','${lname}','${email}','${encrypts}')`

db.query(query,(error,result)=>{
    if(error){
        res.send(utils.createResult(error,result));

    }
    res.send(utils.createResult(error,result))
})
});

router.get('/profile/:id',(req,res)=>{
const {id}=req.params
const query=`select * from user where id=${id}`
db.query(query,(err,rslt)=>{
    if(err){
       res.send(utils.createResult(err,rslt))
    }
    res.send(utils.createResult(err,rslt))
});
})
router.post('/signin',(req,res)=>{
    const {email, pwd}=req.body

    //encrypt
    const encrypts=crypto.MD5(pwd);

    //firing the query
const query=`select * from user where email='${email}' and pwd='${encrypts}'`

db.query(query,(error,result)=>{
    if(error){
        res.send(utils.createResult(error,result));

    }
    else if(result.length==0)
    {res.send("Invalid username or password!!!")}
    else
    res.send(utils.createResult(error,result));
})
});

router.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    const query=`delete from user where id=${id}`
    db.query(query,(err,rslt)=>{
        if(err){
            res.send(utils.createResult(err,rslt));
        }
        res.send(utils.createResult(err,rslt));
    })
})

router.get('/display',(req,res)=>{
   const query=`select * from user;`;
    db.query(query,(err,rslt)=>{
        if(err){
            res.send(utils.createResult(err,rslt));
        }

            res.send(utils.createResult(err,rslt))
      
    })
})





module.exports=router