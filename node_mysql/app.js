const express = require ('express');
const mysql = require ('mysql');
const app = express();

var con = mysql.createConnection({
  host: "192.168.64.2",
  user: "root",
  password: "password",

  //database: 'Group7Vanpool'
});

//create db
app.get('/createdb',(req,res)=>{
  let sql="CREATE DATABASE nodesql";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log( "Database created");
    console.log(result);
  });
})


con.connect(function(err) {
  if (err) 
  {
    throw err;
  }
  else{
    console.log("Connected!");
  }
});


app.listen('3000', ()=>{console.log(`Server started on port 3000`);});