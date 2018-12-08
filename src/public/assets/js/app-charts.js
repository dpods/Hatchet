var App = (function () {
  'use strict';
  
  App.charts = function( ){

    function randValue() {
      return (Math.floor(Math.random() * (1 + 50 - 20))) + 10;
    }

    //Bar Chart 2
    function widget_barchart2(){

      var color1 = App.color.success;
      var color2 = tinycolor( App.color.success ).lighten( 22 ).toString();

    	var plot_statistics = $.plot($("#bar-chart2"), [
    	    {
	          data: [
	        	[0, 7], [1, 13], [2, 17], [3, 20], [4, 26], [5, 37], [6, 35], [7, 28], [8, 38], [9, 38], [10, 32]
	          ],
	          label: "Page Views"
	        },
        ], {
        series: {
          bars: {
          	order: 2,
          	align: 'center',
            show: true,
            lineWidth: 1, 
            barWidth: 1,
            fill: true,
            fillColor: {
              colors: [{
                opacity: 0.75
              }, {
                opacity: 0.75
              }
              ]
            } 
          },
          shadowSize: 2
        },
        legend:{
          show: false
        },
        grid: {
          margin: {
            left: 23,
            right: 30,
            top: 20,
            botttom: 40
          },
        	labelMargin: 10,
          axisMargin: 200,
          hoverable: true,
          clickable: true,
          tickColor: "rgba(0,0,0,0.15)",
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.15)"
        },
        tooltip:{
          show: true,
          cssClass: "tooltip-chart",
          content: "<div class='content-chart'> <span> %s </span> <div class='label'> <div class='label-x'> %x.0 </div> - <div class='label-y'> %y.0 </div> </div></div>",
          defaultTheme: false
        },
        colors: [color1, color2],
        xaxis: {
          ticks: [],
        },
        yaxis: {
          ticks: 4,
          tickDecimals: 0
        }
      });

      widget_tooltipPosition('bar-chart2', 60);
    }

    //Positioning tooltip
    function widget_tooltipPosition(id, top){
      $('#'+id).bind("plothover", function (event, pos, item) {
        var widthToolTip = $('.tooltip-chart').width();
        if(item){
          $(".tooltip-chart")
            .css({top: item.pageY - top, left: item.pageX - (widthToolTip / 2)})
            .fadeIn(200);
        }else{
          $(".tooltip-chart").hide();
        }
      });
    }

    widget_barchart2();
  };

  return App;
})(App || {});
