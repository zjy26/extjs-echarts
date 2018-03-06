Ext.define('Test.view.ECharts', {
   alias: 'widget.testechartsview',
   extend: 'Ext.Container',

   title: 'EChart',
   layout: 'column',
	defaults: {
		columnWidth: 0.5,
		height: 320,
		margin: '3 3 3 3'
	},

	items: [{
		html: '<div id="barEChart" style="width: 500px;height:300px"></div>',
		listeners:{
			afterRender: function(){
				var barEChart = echarts.init(document.getElementById("barEChart"));
				var option = {
					title: {text: 'Bar EChart'},
					tooltip: {},
					xAxis: {
					   data: ['A', 'B', 'C', 'D', 'E', 'F']
					},
					yAxis: {},
					series: [{
					   name: 'number',
					   type: 'bar',
					   data: [5, 20, 36, 10, 10, 20]
					}]
			    };
				barEChart.setOption(option);
			}
		}
	}, {
		html: '<div id="lineEChart" style="width: 500px;height:300px"></div>',
		listeners:{
			afterRender: function(){
				var lineEChart = echarts.init(document.getElementById("lineEChart"));
				var option = {
					title: {text: 'Line EChart'},
					tooltip: {},
				    xAxis: {},
				    yAxis: {},
				    series: [{
				        type: 'line',
				        smooth: true,
				        data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
				    }]
			    };
				lineEChart.setOption(option);
			}
		}
	}, {
		html: '<div id="pieEChart" style="width: 500px;height:300px"></div>',
		listeners:{
			afterRender: function(){
				var pieEChart = echarts.init(document.getElementById("pieEChart"));
				var option = {
					title: {text: 'Pie EChart'},
					series: [{
						type: 'pie',
		                data: [
		                    {name: 'A', value: 1212},
		                    {name: 'B', value: 2323},
		                    {name: 'C', value: 1919}
		                ]
					}]
				};
				pieEChart.setOption(option);
			}
		}
   }, {
   	html: '<div id="scatterEChart" style="width: 500px;height:300px"></div>',
   	listeners:{
	    	afterRender: function(){
	    		var scatterEChart = echarts.init(document.getElementById("scatterEChart"));
	    		var option = {
	    			title: {text: 'Scatter EChart'},
	    		    xAxis: {},
	    		    yAxis: {},
	    		    series: [{
	    		    	type: 'scatter',
	    		    	symbolSize: 20,
	    		        data: [
	    		    	    [10.0, 8.04],
	    		    	    [8.0, 6.95],
	    		    	    [13.0, 7.58],
	    		    	    [9.0, 8.81],
	    		    	    [11.0, 8.33],
	    		    	    [14.0, 9.96],
	    		    	    [6.0, 7.24],
	    		    	    [4.0, 4.26],
	    		    	    [12.0, 10.84],
	    		    	    [7.0, 4.82],
	    		    	    [5.0, 5.68]
	    		    	],

	    		    }]
	    		};
	    		scatterEChart.setOption(option);
	    	}
   	}
   },{
       html: '<div id="radarEChart" style="width: 500px;height:300px"></div>',
   	listeners:{
   		afterRender: function(){
   			var radarEChart = echarts.init(document.getElementById("radarEChart"));
   				var option = {
   						title : {text: 'Radar EChart'},
       				    tooltip : {
       				        trigger: 'axis'
       				    },
       				    legend: {
       				        orient : 'vertical',
       				        x : 'right',
       				        y : 'bottom',
       				        data:['Allocated Budget','Actual Spending']
       				    },
       				    toolbox: {},
       				    polar : [{
       				        indicator : [
       				           { text: 'sales', max: 6000},
       				           { text: 'Administration', max: 16000},
       				           { text: 'Information Techology', max: 30000},
       				           { text: 'Customer Support', max: 38000},
       				           { text: 'Development', max: 52000},
       				           { text: 'Marketing', max: 25000}
       				        ]
       				    }],
       				    calculable : true,
       				    series : [{
       				        name: 'Budget vs spending',
       				        type: 'radar',
       				        data : [{
       				             value : [4300, 10000, 28000, 35000, 50000, 19000],
       				             name : 'Allocated Budget'
       				        },{
       				             value : [5000, 14000, 28000, 31000, 42000, 21000],
       				             name : 'Actual Spending'
       				        }]
       				    }]
       				};
   				radarEChart.setOption(option);
   			}
   		}
   }, {
   	html: '<div id="rosepieEChart" style="width: 500px;height:300px"></div>',
   	listeners: {
   		afterRender: function(){
   			var rosepieEChart = echarts.init(document.getElementById("rosepieEChart"));
   			var option = {
   			    series : [{
   				    name: 'source',
   				    type: 'pie',
   				    radius: '55%',
   				    roseType: 'angle',
   				        data:[
   				            {value:235, name:'Video'},
   				            {value:274, name:'Advertisement'},
   				            {value:310, name:'Email'},
   				            {value:335, name:'Visit'},
   				            {value:400, name:'Search'}
   				        ]
   				 }]
   			};
   			rosepieEChart.setOption(option);
   		}
   	}
   }]
});

