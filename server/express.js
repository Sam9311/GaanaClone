//required imports...
var express=require('express');
var app=express();
var path=require('path');

//routers definition
var routeuser=require('./routes/user')
var routesongs=require('./routes/songs')
var routealbum=require('./routes/album')
var routeadmin=require('./routes/admin')
var routeartist=require('./routes/artist')

//homepage loading
 app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
});

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
