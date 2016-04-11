$(document).ready(function(){
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'How Do Specific Age Groups Get Their News?'
        },
        xAxis: {
            categories: ['18-29', '30-49', '50-64', '65+']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'News Consumption by Percentage'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'Local/Natioanl Print',
            data: [2, 4, 7, 11]
        }, {
            name: 'Other',
            data: [8, 6, 8, 8]
        }, {
            name: 'Network/Local News',
            data: [10, 21, 33, 27]
        }, {
            name: 'Radio',
            data: [11, 13, 13, 5]
        }, {
            name: 'Cable Television',
            data: [12, 21, 25, 43]
        }, {
            name: 'News Website',
            data: [18, 19, 10, 5]
        }, {
            name: 'Social Media',
            data: [35, 15, 5, 1]
        }]
    });
});
});
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Amount of Reddit Comments Per Presidential Candidate in 2015'
        },
        xAxis: {
            categories: ['May', 'Jun', 'Sep']
        },
        yAxis: {
            title: {
                text: 'Amount of Reddit Comments'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true
            }
        },
        series: [{
            name: 'Bernie Sanders',
            data: [42000, 38000, 85000]
        }, {
            name: 'Hillary Clinton',
            data: [20000, 22000, 43000]
        },
        {
                name: 'Donald Trump',
            data: [1000, 8000,64000]
        }]
    });
});