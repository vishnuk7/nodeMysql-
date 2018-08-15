const express = require('express');
const mysql = require('mysql');

const app = express();

//create connection with sql
const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'nodemysql'
});

//conect
db.connect((err)=>{
  if(err){ 
    throw err;
  }
  console.log("MySql Connected ...");
});

// Create DB
app.get('/createdb',(req,res)=>{
  let sql = 'CREATE DATABASE nodemysql';
  db.query(sql,(err,result)=>{
    if(err){ 
      throw err;
    }
    console.log(result);
    res.send('Database Created');
  });
});

//Create Table
app.get('/createposttable',(req,res)=>{
  let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id) )';
  db.query(sql,(err,result)=>{
    if(err){
      throw err;
    }
    console.log(result);
    res.send("Table is created");
  })
});

//Insert Post
app.get('/addpost1',(req,res) =>{
  let post = {title:'Post One',body:'This is the post number one'}
  let sql = 'INSERT INTO posts SET ?';
  let query = db.query(sql,post,(err, result)=>{
    console.log(result);
    res.send("Post one is created");
  })
});

app.listen('3000',()=>{
  console.log("Server started on 3000");
});

