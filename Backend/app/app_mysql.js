const express =require("express");
const mysql= require("./app");

const app=express();

app.listen(3000,()=>{
    console.log("Server start.port 3000");
});

app.get("/", async (req,res)=>{
    const admin_info = await mysql.query('adminIdPw');
    console.log(admin_info);
    res.send(admin_info);
});
