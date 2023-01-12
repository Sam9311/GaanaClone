const mysql =require('mysql2');

console.log("connecting...");

//pool creation_all in javascript written as json
const pool=mysql.createPool({
host:'localhost',
user:'sumit',
password:'root123',
database:'gaana',
waitForConnection:true,
connectionLimit:10,
queueLimit:0
});

//exporting connection pool_ these connections will be closed automatically
module.exports=pool;
