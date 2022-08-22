"use strict"; //엄격모드를 의미하며 이코마 스크립트 문법을 준수하겠다고 명시 해주는것. js파일 위에 넣는다.

const express = require("express");
//app이 아닌 router을 사용한다
const router = express.Router();

//ctrl에서 빼준 부분 을 사용가능하게 받기.
const ctrl = require("./home.ctrl");

router.get("/",ctrl.output.home);
router.get("/login",ctrl.output.login);
router.post("/login",ctrl.process.login);
router.get("/register",ctrl.output.register);
router.post("/register", ctrl.process.register);
router.get("/video1",ctrl.output.video1);
router.get("/video2",ctrl.output.video2);
router.get("/enlarge",ctrl.output.enlarge);
router.get("/warning_log",ctrl.output.warning_log);

//router를 외부파일에서 사용할 수 있도록 던져주는 부분
module.exports = router;