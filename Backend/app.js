const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
let pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "cgv_project",
});
let db = pool.promise();
app.post("/register", (req, res) => {
  const sql = "INSERT INTO users (`name`,`email`,`password`) VALUES(?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    
    }
    return res.json(data);
  ;});
  console.log(err)
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE `email`= ? AND `password`= ?";
  db.query(sql, [req.body.email,req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
      
    }
   if(data.length>0){
    return res.json("success")
   }else{
    return res.json("Fall")
   }
   
  });
});

app.listen(3001, () => {
  console.log("server is running on http://localhost:3001");
});
module.exports.db = db;
