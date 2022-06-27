const express = require('express');
const app = express();
const mysql = require('mysql2');
const connection= mysql.createConnection({
    host: 'localhost',
    user: 'yugansh',
    password: 'cdac',
    database: 'db1',
    port : 3306

});
/*a)  1
connection.query("insert into item values(?,?,?,?)",[1,"abc",2,"liquid"],(err ,res)=>{
    
    if(err){
        console.log("error ayega");
        
    }
    else{
        console.log(res); 
    }
}) */

/* 2
connection.query("update item  set itemname= ? where itemno=?",["pre",1],(err ,res)=>{
   jitke ? astil titke vakue [] yenar 
    if(err){
        console.log("error ayega");
        
    }
    else{
        console.log(res.affectedRows); 
    }
}) */

/*connection.query("update item  set category = ?,  price = ? where  itemno=?",["pqr",50,1],(err ,res)=>{
    
    if(err){
        console.log("error ayega");
        
    }
    else{
        console.log(res.affectedRows); 
    }
})  */

/*  3
 connection.query("select category from item " ,(err ,res)=>{
    
    if(err){
        console.log("error ayega");
        
    }
    else{
        console.log(res); 
    }
}) 
 4 */
connection.query("select itemno from item where category= ? ",["pqr"],(err ,res)=>{
    
    if(err){
        console.log("error ayega");
        
    }
    else{
        console.log(res); 
    }
})  

