const express=require('express');
const router=express.Router();
const db=require('../db');
const utils=require('../utils');
const multer=require('multer');
const songs=multer({dest:'song/'})



router.get('/',(req,res)=>{
    const query=`select * from songs;`;
     db.query(query,(err,rslt)=>{
         if(err){
             res.send(utils.createResult(err,rslt));
         }
 
             res.send(utils.createResult(err,rslt))
       
     })
 })

 


 router.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    const query=`delete from songs where id=${id}`
    db.query(query,(err,rslt)=>{
        if(err){
            res.send(utils.createResult(err,rslt));
        }
        res.send(utils.createResult(err,rslt));
    })
})

router.post('/create',songs.single('thumbnail'),(req,res)=>{
    const {title,duration,artistid}=req.body;
    const file=req.file.filename;
    const query=`insert into songs(title,thumbnail,duration,artistid) values('${title}','${file}','${duration}',${artistid})`;
    db.query(query,(err,rslt)=>{
        if(err){
            res.send(utils.createResult(err,rslt));
        }

            res.send(utils.createResult(err,rslt))
      
    })
})


router.get('/artistsongs',(req,res)=>{
    
    const query=`select * from songs,artist where songs.artistid=artist.id`;
    db.query(query,(err,rslt)=>{
        if(err){
            res.send(utils.createResult(err,rslt));
        }

            res.send(utils.createResult(err,rslt))
      
    })
})

router.get('/:id',(req,res)=>{

    const {id}=req.params
    const query=`select * from songs where id=${id};`;
     db.query(query,(err,rslt)=>{
         if(err){
             res.send(utils.createResult(err,rslt));
         }
 
             res.send(utils.createResult(err,rslt))
       
     })
 })


module.exports=router