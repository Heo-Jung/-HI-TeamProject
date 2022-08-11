const checkID = document.querySelector("#inputID");                // 적은 ID
const checkPW = document.querySelector("#inputPassword");          // 적은 PW
const dcheckPW = document.querySelector("#inputPasswordConfirm");  // 적은 PW 재확인
// 마스터 계정 : 관리자 ID 추가 만드는 계정
const masterID = 'master';
const masterPW = 'masterpw1234';

let loadSet =[];
if (localStorage.getItem('loginSets') == null) { 
    localStorage.setItem('loginSets','[]')
} else {
    console.log('Exist')
}

//const inputID = JSON.parse(localStorage.getItem('loginKey'))['id']

function onLoginSubmit(event){  //추후에 DB연결해서 관리자 테이블 값 가져와서 처리해야 함
    if(checkID.value == '' || checkPW.value == ''){
        alert("작성하지 않은 칸이 있습니다.");
    }
    else {
        // 
        const ID_set = { 'id' : checkID.value , 'pw' : checkPW.value }
        let setCheck = checkSetExist(ID_set)
        // setCheck 값 확인해서 2이면 사람 추가 페이지, 1이면 DashBoard 페이지로 이동
        if (setCheck == 2) { location.href = "register.html";  }
        else if (setCheck == 1) { location.href = "index.html";  }
    }
}

function onLoginSubmitEnter(event){
    if (window.event.keyCode == 13) {
    	onLoginSubmit(event);
    }
}

function makeAccount(event){
    // 전체 칸 입력 여부 확인.
    if(checkID.value == '' || checkPW.value =='' || dcheckPW.value == ''){
        alert("작성하지 않은 칸이 있습니다.");
    } else {
        // 저장된 set가 있으면 불러오기
        if(localStorage.getItem('loginSets')) {
            loadSet = JSON.parse(localStorage.getItem('loginSets'))
        }
        // 마스터 계정인지 확인
        if (checkID.value == masterID){
            checkID.value="";
            checkPW.value="";
            dcheckPW.value="";
            checkID.focus();
            alert("이미 존재하는 ID입니다.")
        }
        // 마스터 계정 아니면 다른 아이디와 중복 확인
        else {
            // 저장된 set의 ID와 중복확인
            for(i=0; i < loadSet.length; i++) {
                if(checkID.value == loadSet[i]['id']) {
                    checkID.value="";
                    checkPW.value="";
                    dcheckPW.value="";
                    checkID.focus();
                    alert("이미 존재하는 ID 입니다.");
                    return 0;
                }
            }
            if (checkPW.value != dcheckPW.value){
                alert("비밀번호가 일치하지 않습니다.");
                return 0;
            } else {
                alert(`ID : ${checkID.value} \nPW${checkPW.value}로 생성되었습니다.`)
                registerLoginSets(checkID.value, checkPW.value);
                return 0;
            }
        }
    }

}

function makeAccountEnter(event){
    if (window.event.keyCode == 13) {
    	makeAccount(event);
    }
}

function checkSetExist ( beforeCheckSet ) {
    // ID 와 PW 둘다 맞으면 1 틀릴 경우 0 출력.

    loadSet = JSON.parse(localStorage.getItem('loginSets'))
    for(i=0; i<loadSet.length; i++) {
        // 마스터 ID 인지 먼저 검사
        if (beforeCheckSet['id'] == masterID ){
            if (beforeCheckSet['pw'] == masterPW ){
                return 2;
            }
            else {                
                checkPW.value="";
                alert('비밀번호가 틀렸습니다.');
                checkPW.focus();
                return 0;
            }
        }

        // ID 일치 검사
        if(beforeCheckSet['id'] == loadSet[i]['id']) {
        // PW 일치 검사
            if(beforeCheckSet['pw'] === loadSet[i]['pw']) {
                return 1;
            }
            else {
                checkPW.value="";
                alert('비밀번호 틀림');
                checkPW.focus();
                return 0;
            }
        }
    }
    alert('존재하지 않는 ID입니다.')
    return 0;
}

function registerLoginSets (newID, newPW) {
    // 로그인 셋 불러오기
    if(localStorage.getItem('loginSets')) {
        loadSet = JSON.parse(localStorage.getItem('loginSets'))
        //console.log(loadSet)
        //loadSet
    }
    const ID_set = {'id': newID ,'pw': newPW};
    loadSet.push(ID_set);
    localStorage.setItem("loginSets",JSON.stringify(loadSet));
}

//registerLoginSets('checkID.value1', 'checkPW.value1');
//registerLoginSets('checkID.value2', 'checkPW.value2');
//registerLoginSets('checkID.value3', 'checkPW.value3');
//console.log(localStorage.getItem('loginSets'));
//console.log('함수 통과 :',JSON.stringify(tempw));
//console.dir(JSON.parse(localStorage.getItem('loginKey')))

// 값 확인
//console.log(JSON.parse(localStorage.getItem('loginSets')));       // 로그인 정보 전체
//console.log(JSON.parse(localStorage.getItem('loginSets'))[0]);    // 로그인 정보 1개