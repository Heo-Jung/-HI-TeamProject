"use strict";

const User = require("../../models/User");

const output={
  home:(req, res) =>{
    res.render("home/index");
  },
  
  login:(req, res) =>{
    res.render("home/login");
  },

  register:(req, res) =>{
    res.render("home/register");
  },

  video1:(req, res) =>{
    res.render("home/video1");
  },

  video2:(req, res) =>{
    res.render("home/video2");
  },

  enlarge:(req, res) =>{
    res.render("home/enlarge");
  },

  warning_log : (req, res) =>{
      res.render("home/warning_log");
  }
};

// login.js의 fetch()에서 POST하는 데이터를 받아 오는 부분
const process={//web화면에서 id와 pw에 입력한 데이터 받아옴
  login: async (req,res)=>{ 
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },

  register: async (req,res)=>{ 
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};

//모듈을 밖으로 빼주기 함수의 return 같은 느낌
module.exports ={
  output,
  process,
};

//설명 
//오브젝트에서 일반적으로 
//{key:value}형태를 사용한다.
//하지만 위 처럼 key만 입력 해줄 경우
//아래와 같이 key와 value가 같은 값으로 설정
// {
//   hello : hello,
//   lonin : login,
// } 
