google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Maand', 'Bananen', 'Uitgegeven'],
        ['Januari', 100, 40],
        ['Februari', 300, 120],
        ['Maart', 40, 10],
    ]);

    var options = {
        chart: {
            title: 'Verdiende bananen',
            subtitle: 'Voortgang januari-maart',
        },
        bars: 'vertical', // Required for Material Bar Charts.
        hAxis: {format: 'decimal'},
        height: 400,
        colors: ['#E77131', '#249F8D']
    };

    var chart = new google.charts.Bar(document.getElementById('chart_div'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}