let pTagCount = 0;      // 프로필 index 값 설정
let signalCount = 1;    // 신호 id 값 설정

// 프로필 리스트 추가하는 함수
function addProfile() {
    const tagArea = document.getElementById('profile-lists');   // 프로필 넣을 위치
    
    ///// 예시 - tagArea ////////////////////////////////////////////
    //      ⒜     //      ⒝      //     ⒞     //      ⒟  　    //
    //  프로필 사진 //    정보 1    //   정보 2   //    신호 4개    //
    //    <img>    //     <p>      //  　 <p>    //     <div>     //
    ////////////////////////////////////////////////////////////////

    let new_span = document.createElement('span');              // 새로운 span 태그 만들기
    new_span.setAttribute('class','profile-list');              // span 태그 속성 설정
    new_span.setAttribute('id',`${pTagCount}`);
    new_span.addEventListener("click",goTo_EnlargePage)

    // ⒜새로운 image 태그 만들기
    let new_img = document.createElement('img');                
    new_img.setAttribute('class','profileImage');               // image 태그 속성 설정
    new_img.setAttribute('id',workers[pTagCount].name);         // image 이름 값 설정
    new_img.src = "js/home/profile/"+workers[pTagCount].name+".jpg";      // image 태그 위치값 입력
    new_img.onerror = function(){this.src = "js/home/profile/account.png"}; // image 없을 시 기본 이미지 출력

    // ⒝새로운 p 태그1 (정보1)와 입력 값
    let new_pTag1 = document.createElement('p');
    new_pTag1.setAttribute('class','info');                
    new_pTag1.innerHTML = '이　　름 : '+workers[pTagCount].name+'<br>소　　속 : '+workers[pTagCount].part+'<br>전화번호 : '+workers[pTagCount].phone+'<br>';
    // ⒞새로운 p 태그2 (정보2)와 입력 값
    let new_pTag2 = document.createElement('p');
    new_pTag2.setAttribute('class','info');                
    new_pTag2.innerHTML = '나　　이 : '+workers[pTagCount].age+'<br>직　　책 : '+workers[pTagCount].posit+'<br>위　　치 : '+workers[pTagCount].locate+'<br>';
    // ⒟새로운 div 태그 (신호 4개)
    let new_divTag = document.createElement('div');

    let make_1signal = document.createElement('p');
        make_1signal.setAttribute('class','circle');
        make_1signal.setAttribute('id',`w${signalCount}`);
            new_divTag.appendChild(make_1signal);
            signalCount++;
    let make_2signal = document.createElement('p');
        make_2signal.setAttribute('class','circle');
        make_2signal.setAttribute('id',`w${signalCount}`);
            new_divTag.appendChild(make_2signal);
            signalCount++;
    let make_3signal = document.createElement('p');
        make_3signal.setAttribute('class','circle');
        make_3signal.setAttribute('id',`w${signalCount}`);
            new_divTag.appendChild(make_3signal);
            signalCount++;
    let make_4signal = document.createElement('p');
        make_4signal.setAttribute('class','circle');
        make_4signal.setAttribute('id',`w${signalCount}`);
            new_divTag.appendChild(make_4signal);
            signalCount++;

    tagArea.appendChild(new_span);      // 프로필리스트에 새로운 프로필창 생성

    new_span.appendChild(new_img);      // 새 프로필 창에 이미지 추가
    new_span.appendChild(new_pTag1);    // 새 프로필 창에 정보 1 추가
    new_span.appendChild(new_pTag2);    // 새 프로필 창에 정보 2 추가
    new_span.appendChild(new_divTag);

    pTagCount++;                        // 프로필 index 값 증가.
}

function profilelistUpdate () {
    const workersMount = localStorage.getItem("workersMount")
    pTagCount = 0;      // 프로필 index 값 재설정
    signalCount = 1;    // 신호 id 값 재설정

    for (i= 0; i< workersMount; i++) {
        addProfile();
    }
}

function goTo_EnlargePage() {
    let workerSelect = this.children[0].id;
    let selectIndex = parseInt(this.id);
    localStorage.setItem("workerSelect",workerSelect);
    localStorage.setItem("selectIndex",selectIndex);

    //const link = 'enlarge.html';
    window.open('/enlarge','vucket',"width=800, height=600");
}
