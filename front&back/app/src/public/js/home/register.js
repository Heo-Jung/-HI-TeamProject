const checkID = document.querySelector("#inputID");
const checkPW = document.querySelector("#inputPassword");
const dcheckPW = document.querySelector("#inputPasswordConfirm");

function makeAccount(event){
    if(!checkID.value) return alert("아이디를 입력해주십시오");
    if (checkPW.value !== dcheckPW.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req={
        id : checkID.value,
        psword : checkPW.value,
    };

    fetch("/register",{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req),
    })
    .then((res)=> res.json())
    .then((res)=>{
        if (res.success){
            alert("관리자 " + checkID.value +"을(를) 추가하였습니다.");
        }else{
            alert(res.msg);
        }
    }).catch((err)=>{
        console.error("관리자 추가 중 에러 발생");
    });
    // if(checkID.value == '' || checkPW.value =='' || dcheckPW.value == ''){
    //     alert("작성하지 않은 칸이 있습니다.");
    // } else{
    //     if(localStorage.getItem(checkID.value) != null){
    //         alert("이미 존재하는 ID 입니다.");
    //     } else if(checkPW.value != dcheckPW.value){
    //         alert("비밀번호가 일치하지 않습니다.");
    //     } else{
    //         localStorage.setItem(checkID.value, checkPW.value);   //지금은 local storage에 같이 저장되는데 나중에는 사원 테이블, 관리자 테이블 구분해야 함
    //         checkID.value = "";
    //         checkPW.value = "";
    //         dcheckPW.value = "";
    //         checkID.focus();
    //     }
    // }
}

function makeAccountEnter(event){
    if (window.event.keyCode == 13) {
    	makeAccount(event);
    }
}