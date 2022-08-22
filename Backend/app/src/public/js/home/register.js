"use strict"

//DOM -> Document Object Model (문서 객체 모델 ) 
//일종의 인터페이스

const id = document.querySelector("#id");//질의 선택자
const name = document.querySelector("#name");
const psword = document.querySelector("#psword");//#은 태그의 id의 값 'id'를 의미
const confirmPsword = document.querySelector("#confirm-psword");
//id = 'id'
const registerBtn = document.querySelector("a");
console.log("test register");
registerBtn.addEventListener("click",register);

function register(){
  if(!id.value)return alert("아이디를 입력해주세요.")
  if(psword.value!==confirmPsword.value){
    return alert("비밀번호가 일치하지 않습니다.");
  }
  const req={
    id : id.value,
    name : name.value, 
    psword : psword.value,
  };
  
  //console.log(req);
  //console.log(JSON.stringify(req));


  fetch("/register",{  //내가 전달 하려는 데이터의 형식을 알려줘야한다.
    method : "POST",
    headers:{
      "Content-Type": "application/json",  //데이터 타입 명시 "application/json"
    },
    body : JSON.stringify(req),
  })
  .then((res)=> res.json())
  .then((res)=>{
    if (res.success){
      location.href ="/login";
    }else{

      alert(res.msg);
    }
  }).catch((err)=>{
    console.error("회원가입 중 에러 발생");
  });
  //PROMISE가 뭔지 공부해볼것
}
