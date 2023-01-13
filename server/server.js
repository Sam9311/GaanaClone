//required imports...
const express=require('express');
const app=express();
const path=require('path');
const cors=require('cors'); //cross origin sharing resources
const bodyparser =require('body-parser');



//routers definition
const routeuser=require('./routes/user')
const routesongs=require('./routes/songs')
const routealbum=require('./routes/album')
const routeadmin=require('./routes/admin')
const routeartist=require('./routes/artist')

//homepage loading
 app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors('*'));

//routers
app.use('/user',routeuser)
app.use('/album',routealbum)
app.use('/artist',routeartist)
app.use('/songs',routesongs)
app.use('/admin',routeadmin)

//server started
app.listen(4000,()=>{
    console.log("listening on 4000...");
});
module.exports=app;