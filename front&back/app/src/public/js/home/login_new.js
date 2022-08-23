const checkID = document.querySelector("#inputID");
const checkPW = document.querySelector("#inputPassword");
const dcheckPW = document.querySelector("#inputPasswordConfirm");
const masterID = 'master';
const masterPW = 'masterpw1234';


    

function onLoginSubmit(event){  //추후에 DB연결해서 관리자 테이블 값 가져와서 처리해야 함
    const req={
        id : checkID.value,
        psword : checkPW.value
    };

    fetch("/login",{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req),
    })
    .then((res)=> res.json())
    .then((res)=>{
        if (res.success){
            if(checkID.value == masterID && checkPW.value == masterPW){
                location.href = "/register";
            }else{
                localStorage.setItem('loggedID', checkID.value);
                location.href ="/";
            }
        }else{
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
    }).catch((err)=>{
        console.error("로그인 중 에러 발생");
    });
}

function onLoginSubmitEnter(event){
    if (window.event.keyCode == 13) {
    	onLoginSubmit(event);
    }
}