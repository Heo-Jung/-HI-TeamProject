// Set new default font family and font color to mimic Bootstrap's default styling
//Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
//Chart.defaults.global.defaultFontColor = '#292b2c';

//
let inputLabel = ["1일", "2일", "3일", "4일", "5일", "6일", "7일", "8일", "9일", "10일", "11일", "12일", "13일","14일"]

let inputData = [98, 111, 105, 84, 85, 129, 100, 102, 105, 87, 99, 108, 110, 104]

// Area Chart Example
var ctxA = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctxA, {
  type: 'line',
  data: {
    labels: inputLabel,
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
      data: inputData,
    }],
  },
  options: {
    title : {
      display :true,
      fontSize : 15,
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
          maxTicksLimit: 7  // X축 선의 갯수 (0포함)
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 200,
          maxTicksLimit: 7  // Y축 선의 갯수 (0포함)
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
