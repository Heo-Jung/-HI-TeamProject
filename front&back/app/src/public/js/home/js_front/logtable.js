window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});

function warning_Write (whatSignal, log_index, warning_value){
    const warningLog_input = document.getElementById('log_input');

    // 새로운 로그 라인 정의하기
    let new_logLine = document.createElement('tr');
        // 인덱스들 정의
        let new_logName = document.createElement('td');
        let new_logPhone = document.createElement('td');
        let new_logWarning = document.createElement('td');
        let new_logDate = document.createElement('td'); 
        let new_logAge = document.createElement('td');
        let new_logPosit = document.createElement('td');
            
    // 정의한 개체 생성하기 
    warningLog_input.appendChild(new_logLine);
        new_logLine.appendChild(new_logName);
        new_logLine.appendChild(new_logPhone);
        new_logLine.appendChild(new_logWarning);
        new_logLine.appendChild(new_logDate);
        new_logLine.appendChild(new_logAge);
        new_logLine.appendChild(new_logPosit);

    // 개체에 값 집어넣기
    new_logName.innerHTML = workers[log_index].name
    new_logPhone.innerHTML = workers[log_index].phone;
    new_logDate.innerHTML = '2022/08/10 - 17:15'
    new_logAge.innerHTML = workers[log_index].age
    new_logPosit.innerHTML = '-'

    if(whatSignal == 1){
        new_logWarning.innerHTML = `<warningLogLight>●</warningLogLight>위험 - 심박수 : ${warning_value}`
    }
    if(whatSignal == 2){
        new_logWarning.innerHTML = `<warningLogLight>●</warningLogLight>위험 - 혈압 : ${warning_value}`
    }
    if(whatSignal == 3){
        new_logWarning.innerHTML = `<warningLogLight>●</warningLogLight>위험 - 산소포화도 : ${warning_value}`
    }
    if(whatSignal == 4){
        new_logWarning.innerHTML = `<warningLogLight>●</warningLogLight>위험 - 스트레스 : ${warning_value}`
    }
}

function caution_Write (whatSignal, log_index, caution_value){
    const cautionLog_input = document.getElementById('log_input');

    // 새로운 로그 라인 정의하기
    let new_logLine = document.createElement('tr');
        // 인덱스들 정의
        let new_logName = document.createElement('td');
        let new_logPhone = document.createElement('td');
        let new_logWarning = document.createElement('td');
        let new_logDate = document.createElement('td'); 
        let new_logAge = document.createElement('td');
        let new_logPosit = document.createElement('td');
            
    // 정의한 개체 생성하기 
    cautionLog_input.appendChild(new_logLine);
        new_logLine.appendChild(new_logName);
        new_logLine.appendChild(new_logPhone);
        new_logLine.appendChild(new_logWarning);
        new_logLine.appendChild(new_logDate);
        new_logLine.appendChild(new_logAge);
        new_logLine.appendChild(new_logPosit);

    // 개체에 값 집어넣기
    new_logName.innerHTML = workers[log_index].name
    new_logPhone.innerHTML = workers[log_index].phone;
    new_logDate.innerHTML = '2022/08/10 - 17:15'
    new_logAge.innerHTML = workers[log_index].age
    new_logPosit.innerHTML = '-'

    if(whatSignal == 1){
        new_logWarning.innerHTML = `<cautionLogLight>●</cautionLogLight>주의 - 심박수 : ${caution_value}`
    }
    if(whatSignal == 2){
        new_logWarning.innerHTML = `<cautionLogLight>●</cautionLogLight>주의 - 혈압 : ${caution_value}`
    }
    if(whatSignal == 3){
        new_logWarning.innerHTML = `<cautionLogLight>●</cautionLogLight>주의 - 산소포화도 : ${caution_value}`
    }
    if(whatSignal == 4){
        new_logWarning.innerHTML = `<cautionLogLight>●</cautionLogLight>주의 - 스트레스 : ${caution_value}`
    }
}