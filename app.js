const express = require('express');
const mysql = require('mysql');

const app = express();

//create connection with sql
const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  // database:'nodemysql'
});

//conect
db.connect((err)=>{
  console.log("MySql Connected ...");
});

//Create DB
app.get('/createdb',(req,res)=>{
  let sql = 'CREATE DATABASE nodemysql';
  db.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send('Database Created');
  });
})

app.listen('3000',()=>{
  console.log("Server started on 3000");
});

