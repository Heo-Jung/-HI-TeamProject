//"use strict"; //엄격모드를 의미하며 이코마 스크립트 문법을 준수하겠다고 명시 해주는것. js파일 위에 넣는다.

import express from 'express';
import bodyParser from "body-parser";
import home from "./src/routes/home/index.js";
import mysql from "mysql";
import * as sql from './src/models/sql.js';

//모듈
//express 모듈을 이용한 서버 열기
//const express = require("express");//require이라는 명령어로 express라는 모듈을 다운
const app = express();//변수 app안에 express() 넣어주고 

//mysql
// const mysql=require('mysql');
// const sql=require('./src/models/sql.js');

//body-parser이라는 모듈로 body를 쉽게 parsing 가능
//const bodyParser = require("body-parser");

//라우팅
//우리가 만든 js파일을 require해서 불러오게 만드는 코드
//const home = require("./src/routes/home");


app.set("views","./src/views");//set("화면 views를 만들고","그 views가 있는 폴더의 위치")
//코드를 어떤 엔진으로 해석할지 지정
//우리는 view engin으로 ejs라는것을 사용
app.set("view engine","ejs");

//미들웨어 등록 
app.use(express.static("./src/public"));
//${__dirname}는 현재 app.js파일이 있는 경로를 반환
//즉, app.js가 있는 dir에서/src안에 public폴더를 정적 경로로 추가
//ejs파일에서 src로 경로를 지정해주면 public가 root경로로 지정 

//body-parser를 사용해주기 위한 미들웨어 설정
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));

app.use("/",home);//use()는 미들웨어를 등록해주는 메서드
//login.ejs에서 login.js에 접근 할 수 있도록 처리가 필요



const pool = mysql.createPool({
    connectionLimit:process.env.MYSQL_LIMIT,
    host:process.env.MYSQL_HOST,
    port:process.env.MYSQL_PORT,
    user :process.env.MYSQL_USERNAME,
    password:process.env.MYSQL_PROSSWORD,
    database :process.env.MYSQL_DB
});

const query = async(alias,values)=>{
    return new Promise ((resolve,reject)=> pool.query(sql[alias],values,(error,results)=>{
        if(error){
            console.log(error);
            reject({
                error
            });
        }else resolve(results);
    }));
}


export {
    app,
    query
};


//서비스 개발을 할때는 MVC패턴을 주로 이용하나  
//MVP, MTV .. 다양한 설계 패턴이 존재
//그중 MVC 패턴을 이용하여 개발 할 계획 
