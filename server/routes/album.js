const express=require('express');
const router=express.Router();
const db=require('../db');
const utils=require('../utils');



router.get('/',(req,res)=>{
    const query=`select * from album;`;
     db.query(query,(err,rslt)=>{
         if(err){
             res.send(utils.createResult(err,rslt));
         }
 
             res.send(utils.createResult(err,rslt))
       
     })
 })










module.exports=router