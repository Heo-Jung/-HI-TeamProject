
// const url = "http://210.104.190.229:8381/";
// fetch("http://210.104.190.229:8381/member/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     "compSeq": 1, 
//     "id": "pang7163y@gmail.com",
//     "lang": "ko_KR",
//     "pw": "Zxcasd123!",
//     "sns" : "O"
//   }),
// }).then((response) => response.json())
// .then((data) => {
//   console.log('성공:', data);
// })
// .catch((error) => {
//   console.error('실패:', error);
// });

// fetch('http://210.104.190.229:8381/member/login')
//   .then(res => {
//     // response 처리
//     console.log(res);
//     // 응답을 JSON 형태로 파싱
//     return res.json();
//   })
//   .then(data => {
//     // json 출력
//     console.log(data)
//   })
//   .catch(err => {
//     // error 처리
//     console.log('Fetch Error', err);
//   });

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(res => {
//     // response 처리
//     console.log(res);
//     // 응답을 JSON 형태로 파싱
//     return res.json();
//   })
//   .then(data => {
//     // json 출력
//     console.log(data)
//   })
//   .catch(err => {
//     // error 처리
//     console.log('Fetch Error', err);
//   });
const express = require('express');
const router = express.Router();
const request = require('request');


let OSDOptions = {
  url: "http://210.104.190.229:8381/member/login",  
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    compSeq : 1, 
    id : "pang7163y@gmail.com",
    lang : "ko_KR",
    pw : "Zxcasd123!",
    sns : "O"
  }),
}

request(OSDOptions, function (err, res, body) {
  if (!err && res.statusCode == 200) {
    console.log(JSON.parse(body));
  }else if (!err && res.statusCode == 401) {
    console.log("비밀번호 불일치");
  }else if (!err && res.statusCode == 404) {
    console.log("해당 계정 없음");
  }else{
    console.log("false");
  }
})

module.exports = router;