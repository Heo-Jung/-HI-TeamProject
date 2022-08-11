//전체를 담을 창
let enlargeBOX = document.getElementById('enlargeBox');
    // 프로필 이미지칸
    let enlargeIMG = document.getElementById('enlargeImg');
    // 프로필 정보칸 1,2
    let enlargeInfo1 = document.getElementById('info1');
    let enlargeInfo2 = document.getElementById('info2');

    let enlarge_w1 = document.getElementById('enlarge_w1');
    let enlarge_w2 = document.getElementById('enlarge_w2');
    let enlarge_w3 = document.getElementById('enlarge_w3');
    let enlarge_w4 = document.getElementById('enlarge_w4');

/////<button : enlargeBox>////////////////////////////////////
// ┌──<div>───────────────────────────────────────────────┐ //
// │   <img>        <p #info1>     <p #info2>             │ //
// │ enlargeIMG   englargeInfo1   englargeInfo2           │ //
// └──────────────────────────────────────────────────────┘ //
// ┌──<div>───────────────────────────────────────────────┐ //
// │  <img> <span> <img> <span> <img> <span> <img> <span> │ //
// │  heart   w1   blood   w2    O2     w3  Stress   w4   │ //
// │             pressure                                 │ //
// └──────────────────────────────────────────────────────┘ //
// ┌──<div>───────────────────────────────────────────────┐ //
// │  ┌──<p>──────────────────────────────────────────┐   │ //
// │  │     <span>              <span>                │   │ // 
// │  │     Chart1              Chart2                │   │ //
// │  └───────────────────────────────────────────────┘   │ //
// │  ┌──<p>──────────────────────────────────────────┐   │ //
// │  │     <span>              <span>                │   │ // 
// │  │     Chart3              Chart4                │   │ //
// │  └───────────────────────────────────────────────┘   │ //
// └──────────────────────────────────────────────────────┘ //
//                                                          //
//////////////////////////////////////////////////////////////



// 정보 표시를 할 사람의 Index
let workerSelect = localStorage.getItem("workerSelect")
let selectIndex = localStorage.getItem("selectIndex")

enlargeIMG.src = `profile/${workerSelect}.jpg`;
enlargeIMG.onerror = function(){this.src = "profile/account.png"}; // image 없을 시 기본 이미지 출력

updateEnlarge()

function updateEnlarge() {
    enlargeInfo1.innerHTML = '이　　름 : '+workers[selectIndex].name+'<br>소　　속 : '+workers[selectIndex].part+'<br>전화번호 : '+workers[selectIndex].phone+'<br>';
    enlargeInfo2.innerHTML = '나　　이 : '+workers[selectIndex].age+'<br>직　　책 : '+workers[selectIndex].posit+'<br>위　　치 : '+workers[selectIndex].locate+'<br>';

    enlarge_w1.innerHTML = workers[selectIndex].w1;
    light1(selectIndex,workers[selectIndex].w1, enlarge_w1);

    enlarge_w2.innerHTML = workers[selectIndex].w2;
    light2(selectIndex,workers[selectIndex].w2, enlarge_w2);

    enlarge_w3.innerHTML = workers[selectIndex].w3;
    light3(selectIndex,workers[selectIndex].w3, enlarge_w3)
    
    enlarge_w4.innerHTML = workers[selectIndex].w4;
    light4(selectIndex,workers[selectIndex].w4, enlarge_w4)
}



