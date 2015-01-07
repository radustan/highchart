function populateChart(data, index) {
    $('#slide' + index).highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: data.event
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: data.categories
        },
        yAxis: [{
            labels: {
                format: '{value}'
            },
            title: {
                text: 'Tickets',
                style: {
                    color: '#333333'
                }
            }
        }, {
            title: {
                text: 'Revenue',
                style: {
                    color: '#333333'
                }
            },
            labels: {
                format: 'EUR {value}',
                style: {
                    color: '#333333'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: [{
            type: 'column',
            data: data.freeTickets,
            stack: 0,
            name: 'Free tickets',
            color: '#67990a'
        }, {
            type: 'column',
            data: data.paidTickets,
            stack: 0,
            name: 'Paid tickets',
            color: '#5A8609'
        }, {
            type: 'spline',
            yAxis: 1,
            data: data.revenue,
            color: '#00aeef',
            name: 'Revenue',
            tooltip: {
                valuePrefix: 'EUR '
            }
        }]
    });
};
$(document).ready(function() {
jQuery.support.cors = true;  

 $.ajax({
    url: 'http://localhost/chart/chartajax.php',
    type: 'GET',
    async: true,
    dataType: "json",
    success: function (data) {
        createGraphs(data);
    }
  });
 });

function createGraphs(data) {
    $.each(data.data, function(i, item) {
            $('.slides').append('<div id="slide'+i+'"></div>');
            populateChart(item, i);
        })
    $('.slides').slick({
          dots: true,
          draggable: false,
          infinite: false,
          arrows: true,
          accessibility: true
        });
}