google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Maand', 'Doel', 'Uitgegeven'],
        ['Januari', 1000, 769],
        ['Februari', 500, 700],
        ['Maart', 820, 120],
    ]);

    var options = {
        chart: {
            title: 'Doelen bereikt omtrent sparen geld',
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

