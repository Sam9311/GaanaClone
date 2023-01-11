const express=require('express');
const router=express.Router();
const db=require('../db');
const utils=require('../utils');


router.post('/signup',(req,res)=>{
    const{fname,lname,email,pwd}=req.body

const query=`insert into user(fname,lname,email,pwd) values (${fname},${lname},${email},${pwd})`;

db.query(query,(err,result)=>{
    if(err){
        res.send(utils.createResult(err,result))

    }
})
});







module.exports=router