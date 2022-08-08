// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctxA = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctxA, {
  type: 'line',
  data: {
    labels: ["1시", "2시", "3시", "4시", "5시", "6시", "7시", "8시", "9시", "10시", "11시", "12시", "13시"],
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
      data: [10000, 59162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
    }],
  },
  options: {
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
          max: 60000,
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
