const checkID = document.querySelector("#inputID");
const checkPW = document.querySelector("#inputPassword");
const dcheckPW = document.querySelector("#inputPasswordConfirm");
const masterID = 'master';
const masterPW = 'masterpw1234';

function onLoginSubmit(event){  //추후에 DB연결해서 관리자 테이블 값 가져와서 처리해야 함
    if(checkID.value == '' || checkPW.value == ''){
        alert("작성하지 않은 칸이 있습니다.");
    } else{
        if(checkID.value == masterID && checkPW.value == masterPW){
            location.href = "register.html";
        } else if(localStorage.getItem(checkID.value) == checkPW.value){
            location.href = "index.html";
        } else if(localStorage.getItem(checkID.value) == null){
            alert("존재하지 않는 ID 입니다.");
        } else{
            alert("비밀번호가 틀렸습니다.");
        }
    }
    
}

function onLoginSubmitEnter(event){
    if (window.event.keyCode == 13) {
    	onLoginSubmit(event);
    }
}

function makeAccount(event){
    if(checkID.value == '' || checkPW.value =='' || dcheckPW.value == ''){
        alert("작성하지 않은 칸이 있습니다.");
    } else{
        if(localStorage.getItem(checkID.value) != null){
            alert("이미 존재하는 ID 입니다.");
        } else if(checkPW.value != dcheckPW.value){
            alert("비밀번호가 일치하지 않습니다.");
        } else{
            localStorage.setItem(checkID.value, checkPW.value);   //지금은 local storage에 같이 저장되는데 나중에는 사원 테이블, 관리자 테이블 구분해야 함
            checkID.value = "";
            checkPW.value = "";
            dcheckPW.value = "";
            checkID.focus();
        }
    }
}

function makeAccountEnter(event){
    if (window.event.keyCode == 13) {
    	makeAccount(event);
    }
}