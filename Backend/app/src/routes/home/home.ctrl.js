"use strict"

const User = require("../../models/User");

const output={
  home:(req, res) =>{
    res.render("home/index");
  },
  
  login:(req, res) =>{
    res.render("home/login");
  },
  register:(req,res)=>{
    res.render("home/register");
  }
  
};



// login.js의 fetch()에서 POST하는 데이터를 받아 오는 부분
const process={//web화면에서 id와 pw에 입력한 데이터 받아옴
  login:async (req,res)=>{ 
    const user = new User(req.body);
    const response = await user.login();
    console.log(response);

    return res.json(response);
  },
  register:async (req,res)=>{ 
    const user = new User(req.body);
    const response = await user.register();
    console.log(response);

    return res.json(response);
  },
};

//모듈을 밖으로 빼주기 함수의 return 같은 느낌
module.exports ={
  output,
  process,
};

