$(document).ready(function() {
    $("#percentage-chart1").updateDonutChart();
    $("#percentage-chart2").updateDonutChart();
    $("#percentage-chart3").updateDonutChart();
    $("#percentage-chart4").updateDonutChart();
    $("#donut-chart").addDonutChart([12.5,25,30], ['#747474','#e75735','#4eb7a8']);
});