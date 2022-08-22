import express from 'express';
import mysql from 'app';

//const express = require("express");//require이라는 명령어로 express라는 모듈을 다운
//const mysql = require("./app");

require('dotenv').config({path:'/.env'});//.env 파일 찾아서 환경변수 설정
const app=express();

app.use(express.json({
    limit:'50mb'
}));

app.listen(3000,()=>{
    console.log("Server start.port 3000");
});

app.get("/adminIdPw", async (req,res)=>{
    const admin_info = await mysql.query('adminIdPw');
    console.log(admin_info);
    res.send(admin_info);
});

app.post("/insert_user_bio_info", async (req,res)=>{
    const result = await mysql.query('insert_user_bio_info',req.body.param);
    console.log(result);
    res.send(result);
});