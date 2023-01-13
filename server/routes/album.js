const express=require('express');
const router=express.Router();
const db=require('../db');
const utils=require('../utils');
const multer=require('multer');
const album=multer({dest:'album/'});


router.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    const query=`delete from album where id=${id}`
    db.query(query,(err,rslt)=>{
        if(err){
            res.send(utils.createResult(err,rslt));
        }
        res.send(utils.createResult(err,rslt));
    })
})

router.post('/create',album.single('thumbnail'),(req,res)=>{
    const {title,duration}=req.body;
    const file=req.file.filename;
    const query=`insert into album(title,thumbnail,duration) values('${title}','${file}','${duration}')`;
    db.query(query,(err,rslt)=>{
        if(err){
            res.send(utils.createResult(err,rslt));
        }

            res.send(utils.createResult(err,rslt))
      
    })
})


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