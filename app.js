const express = require('express');
const mysql = require('mysql');

const app = express();

//create connection with sql
const db = mysql.createConnection();

app.listen('3000',()=>{
  console.log("Server started on 3000");
});

