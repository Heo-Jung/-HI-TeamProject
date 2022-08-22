// 근무자 정보 넣는 함수. (처음 1번)
// w1 : 심박수, w2 : 혈압, w3 : 혈중산소포화도, w4 : 스트레스
function WorkerInfo (name, age, part, posit, phone, locate, w1, w2, w3, w4) {
    this.name = name;
    this.age = age;
    this.part = part;
    this.posit = posit;
    this.phone = phone;
    this.locate = locate;
    this.w1 = w1;
    this.w2 = w2;
    this.w3 = w3;
    this.w4 = w4;
}

/* 시간 마다 착용기기의 데이터 업데이트
function ChangeData (locate, w1, w2, w3, w4) {
    this.locate = locate;
    this.w1 = w1;
    this.w2 = w2;
    this.w3 = w3;
    this.w4 = w4;
}*/

function WriteInfo1(index) {
    document.write('이　　름 : ',workers[index].name)
    document.write('<br>소　　속 : ',workers[index].part)
    document.write('<br>전화번호 : ',workers[index].phone,'<br>')
}
function WriteInfo2(index) {
    document.write('나　　이 : ',workers[index].age)
    document.write('<br>직　　책 : ',workers[index].posit)
    document.write('<br>위　　치 : ',workers[index].locate,'<br>')
}

function CtrlW(index) {
    document.writeln(workers[index].w1)
    document.writeln(workers[index].w2)
    document.writeln(workers[index].w3)
    document.writeln(workers[index].w4)
}


// 배열이랑 객체 이용해서 근무자 목록 선언
let Human1 = new WorkerInfo("방선주",29,"2조","수수방관","010-0000-0000","휴게실",84,129,89,94)
let Human2 = new WorkerInfo("허정",28,"2조","대장","010-0000-0000","강의실",71,100,91,88)
let Human3 = new WorkerInfo("파이리",14,"3조","방화범","010-0000-0000","숙소",163,100,63,64)
let workers = [ Human1,Human2,Human3 ]

workers.push(Human4 = new WorkerInfo("꼬부기",13,"3조","소방관","010-0000-0000","강의실",61,88,89,74))
workers.push(Human5 = new WorkerInfo("잠만보",8,"1조","수면부족","010-0000-0000","숙소",43,78,49,4))
workers.push(Human6 = new WorkerInfo("테스트",25,"1조","테스터","010-0000-0000","서버",88,98,89,4))

workersMount= workers.length

localStorage.setItem("workersMount",workersMount);