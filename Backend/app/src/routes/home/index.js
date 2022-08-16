"use strict"; //엄격모드를 의미하며 이코마 스크립트 문법을 준수하겠다고 명시 해주는것. js파일 위에 넣는다.

//웹페이지의 이동부분을 담당

const express = require("express");
//app이 아닌 router을 사용한다
const router = express.Router();

//ctrl에서 빼준 부분 을 사용가능하게 받기.
const ctrl = require("./home.ctrl");

router.get("/",ctrl.output.home);
router.get("/login",ctrl.output.login);
router.get("/register",ctrl.output.register);//회원가입

router.post("/login",ctrl.process.login);//로그인 버튼을 누르면 post로 로그인 경로 요청하며 ctrl에 process에있는 login
router.post("/register",ctrl.process.register);//회원가입

//router를 외부파일에서 사용할 수 있도록 던져주는 부분
module.exports = router;