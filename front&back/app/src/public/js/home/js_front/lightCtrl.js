workersMount = localStorage.getItem("workersMount");



function lightUpdate() {
    for (i = 0; i < workersMount*4; i++)  {
        // Index 값     : n번 째 사람
        // no_lihgt 값  : n번 째 신호
        let index = parseInt(i/4);
        let no_light = parseInt(i%4+1);
        // w_write : 정보를 변경할 신호 선택
        let w_write = document.getElementById(`w${i+1}`);
        // writeValue : 입력할 값
        // (w1 : 심박수, w2 : 혈압 , w3 : 혈중산소포화도 , w4 : 스트레스 )
        let writeValue = 0;
        
        if (no_light == 1) {
            writeValue = workers[index].w1;
            light1(index, writeValue, w_write)
        }
        else if (no_light == 2) {
            writeValue = workers[index].w2;
            light2(index, writeValue, w_write)
        }
        else if (no_light == 3) {
            writeValue = workers[index].w3;
            light3(index, writeValue, w_write)
        }
        else {
            writeValue = workers[index].w4;
            light4(index, writeValue, w_write)
        }
    
        w_write.innerHTML = writeValue;
    }   
}

const warning_light_color = 'red';
const caution_ligth_color = 'orange';
const safe_light_color = 'rgb(16, 242, 16)';

//심박수 신호 제어
function light1(index, heartRate, WantToChangeSingal) {
    if (heartRate>=150) {
        WantToChangeSingal.style.background = warning_light_color;
        warning_Write(1,index,heartRate);
    }
    else if (heartRate>=120) {
        WantToChangeSingal.style.background = caution_ligth_color;
        caution_Write(1, index, heartRate);
    }
    else if (heartRate>=80) {
        WantToChangeSingal.style.background = safe_light_color;
    }
    else if (heartRate>=55) {
        WantToChangeSingal.style.background = caution_ligth_color;
        caution_Write(1, index, heartRate);
    }
    else {
        WantToChangeSingal.style.background = warning_light_color;
        warning_Write(1,index,heartRate);
    }
    
}

// 혈압 신호 제어
function light2(index, BloodPressure, WantToChangeSingal) {
    if (BloodPressure>=140) {
        WantToChangeSingal.style.background = warning_light_color;
        warning_Write(2,index,BloodPressure)
    }
    else if (BloodPressure>=120) {
        WantToChangeSingal.style.background = caution_ligth_color;
        caution_Write(2, index, BloodPressure);
    }
    else if (BloodPressure>=80) {
        WantToChangeSingal.style.background = safe_light_color;
    }
    else if (BloodPressure>=55) {
        WantToChangeSingal.style.background = caution_ligth_color;
        caution_Write(2, index, BloodPressure);
    }
    else {
        WantToChangeSingal.style.background = warning_light_color;
        warning_Write(2,index,BloodPressure)
    }   
}

// 혈중산소포화도 신호 제어
function light3(index, O2, WantToChangeSingal) {
    if (O2>=80) {
        WantToChangeSingal.style.background = safe_light_color;
    }
    else if (O2>=60) {
        WantToChangeSingal.style.background = caution_ligth_color;
        caution_Write(3, index, O2);
    }
    else {
        WantToChangeSingal.style.background = warning_light_color;
        warning_Write(3,index,O2)
    } 
}

// 스트레스 신호 제어
function light4(index, Stress, WantToChangeSingal) {
    if (Stress>=80) {
        WantToChangeSingal.style.background = warning_light_color;
        warning_Write(4,index,Stress)
    }
    else if (Stress>=60) {
        WantToChangeSingal.style.background = caution_ligth_color;
        caution_Write(4, index, Stress);
    }
    else {
        WantToChangeSingal.style.background = safe_light_color;
        
    } 
}

