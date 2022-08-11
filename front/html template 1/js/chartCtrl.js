var ctx1 = document.getElementById("heartRate_chart");

let input_X1Label = ["1일", "2일", "3일", "4일", "5일", "6일", "7일", "8일", "9일", "10일", "11일", "12일", "13일","14일"]

let input_1Data = [98, 111, 105, 84, 85, 129, 100, 102, 105, 87, 99, 108, 110, 104]

// Area Chart Example
let myLineChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: input_X1Label,
        datasets: [{
        label: "심박수",
        lineTension: 0.5,
        backgroundColor: "rgba(2,0,216,0.2)",
        borderColor: "rgba(2,117,0,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(200,117,216,1)",
        pointBorderColor: "rgba(0,0,0,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 20,
        pointBorderWidth: 2,
        data: input_1Data,
        }],
    },
    options: {
        title : {
            display :true,
            fontSize : 30,
            fontColor : 'black',
            text : '최근 2주 심박수평균'
        },
        scales: {
        xAxes: [{
            time: {
                unit: 'date'
            },
            gridLines: {
                display: false
            },
            ticks: {
                fontSize : 15,
                fontColor : 'black',
                maxTicksLimit: 7  // X축 선의 갯수 (0포함)
            }
        }],
        yAxes: [{
            ticks: {
                fontSize : 15,
                fontColor : 'black',
                min: 40,
                max: 200,
                stepSize : 40,
            },
            gridLines: {
            color: "rgba(0, 0, 0, .125)",
            }
        }],
        },
        legend: {
        display: false
        }
    }
});

//////////////////////////////////////////////////////////////////////////////////
const ctx2 = document.getElementById("bloodpressure_chart");

let input_X2Label = ["1일", "2일", "3일", "4일", "5일", "6일", "7일", "8일", "9일", "10일", "11일", "12일", "13일","14일"]

let input_2Data = [100, 80, 95, 104, 80, 109, 90, 92, 105, 87, 99, 98, 104, 121]

// Area Chart Example
let myLineChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: input_X2Label,
        datasets: [{
        label: "혈압",
        lineTension: 0.5,
        backgroundColor: "rgba(2,0,216,0.2)",
        borderColor: "rgba(2,117,0,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(200,117,216,1)",
        pointBorderColor: "rgba(0,0,0,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 20,
        pointBorderWidth: 2,
        data: input_2Data,
        }],
    },
    options: {
        title : {
            display :true,
            fontSize : 30,
            fontColor : 'black',
            text : '최근 2주 혈압'
        },
        scales: {
        xAxes: [{
            time: {
            unit: 'date'
            },
            gridLines: {
            display: false
            },
            ticks: {
                fontSize : 15,
                fontColor : 'black',
                maxTicksLimit: 7  // X축 선의 갯수 (0포함)
            }
        }],
        yAxes: [{
            ticks: {
                fontSize : 15,
                fontColor : 'black',
                min: 40,
                max: 200,
                stepSize : 40,
            },
            gridLines: {
                color: "rgba(0, 0, 0, .125)",
            }
        }],
        },
        legend: {
        display: false
        }
    }
});

//////////////////////////////////////////////////////////////////////////////////
const ctx3 = document.getElementById("O2_chart");

let input_X3Label = ["1일", "2일", "3일", "4일", "5일", "6일", "7일", "8일", "9일", "10일", "11일", "12일", "13일","14일"]

let input_3Data = [98, 100, 94, 94, 95, 97, 100, 92, 85, 87, 99, 93, 90, 84]

// Area Chart Example
let myLineChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: input_X3Label,
        datasets: [{
        label: "산소포화도",
        lineTension: 0.5,
        backgroundColor: "rgba(2,0,216,0.2)",
        borderColor: "rgba(2,117,0,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(200,117,216,1)",
        pointBorderColor: "rgba(0,0,0,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 20,
        pointBorderWidth: 2,
        data: input_3Data,
        }],
    },
    options: {
        title : {
            display :true,
            fontSize : 30,
            fontColor : 'black',
            text : '최근 2주 산소포화도'
        },
        scales: {
        xAxes: [{
            time: {
            unit: 'date'
            },
            gridLines: {
            display: false
            },
            ticks: {
                fontSize : 15,
                fontColor : 'black',
                maxTicksLimit: 7  // X축 선의 갯수 (0포함)
            }
        }],
        yAxes: [{
            ticks: {
                fontSize : 15,
                fontColor : 'black',
                min: 0,
                max: 100,
                stepSize : 20,
            },
            gridLines: {
                color: "rgba(0, 0, 0, .125)",
            }
        }],
        },
        legend: {
        display: false
        }
    }
});

//////////////////////////////////////////////////////////////////////////////////
const ctx4 = document.getElementById("stress_chart");

let input_X4Label = ["1일", "2일", "3일", "4일", "5일", "6일", "7일", "8일", "9일", "10일", "11일", "12일", "13일","14일"]

let input_4Data = [40, 58, 54, 74, 65, 37, 82, 92, 85, 68, 39, 40, 52, 50]

// Area Chart Example
let myLineChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: input_X4Label,  // Here
        datasets: [{
        label: "스트레스",
        lineTension: 0.5,
        backgroundColor: "rgba(2,0,216,0.2)",
        borderColor: "rgba(2,117,0,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(200,117,216,1)",
        pointBorderColor: "rgba(0,0,0,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 20,
        pointBorderWidth: 2,
        data: input_4Data,      // Here
        }],
    },
    options: {
        title : {
            display :true,
            fontSize : 30,
            fontColor : 'black',
            text : '최근 2주 스트레스'
        },
        scales: {
        xAxes: [{
            time: {
            unit: 'date'
            },
            gridLines: {
            display: false
            },
            ticks: {
                fontSize : 15,
                fontColor : 'black',
                maxTicksLimit: 7  // X축 선의 갯수 (0포함)
            }
        }],
        yAxes: [{
            ticks: {
                fontSize : 15,
                fontColor : 'black',
                min: 0,
                max: 100,
                stepSize : 20,
            },
            gridLines: {
                color: "rgba(0, 0, 0, .125)",
            }
        }],
        },
        legend: {
        display: false
        }
    }
});
