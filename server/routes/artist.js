const express=require('express');
const router=express.Router();
const db=require('../db');
const utils=require('../utils');
const multer=require('multer');
const upload=multer({dest:'uploads/'});



router.delete('/delete/:id',(req,res)=>{
    console.log(req.params)
    console.log(req.body)
    const {id}=req.params;
    const query=`delete from artist where id=${id}`
    db.query(query,(err,rslt)=>{
        if(err){
            res.send(utils.createResult(err,rslt));
        }
        res.send(utils.createResult(err,rslt));
    })
})

router.post('/add',upload.single('thumbnail'),(req,res)=>{
const {fname, lname}=req.body
const file=req.file.filename
const query=`insert into artist (fname,lname,thumbnail) values('${fname}','${lname}','${file}')`
db.query(query,(err,rslt)=>{
    if(err){
        res.send(utils.createResult(err,rslt));
    }

        res.send(utils.createResult(err,rslt))
  
})
})





router.get('/',(req,res)=>{
    const query=`select * from artist;`;
     db.query(query,(err,rslt)=>{
         if(err){
             res.send(utils.createResult(err,rslt));
         }
 
             res.send(utils.createResult(err,rslt))
       
     })
 })

 router.get('/:fname',(req,res)=>{
    const query=`select * from artist where fname='${fname}' ;`;
     db.query(query,(err,rslt)=>{
         if(err){
             res.send(utils.createResult(err,rslt));
         }
 
             res.send(utils.createResult(err,rslt))
       
     })
 })









module.exports=router